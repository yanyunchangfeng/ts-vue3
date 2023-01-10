<template>
    <div class="home">
        <HomeHeader :category="category" @setCurrentCategory="setCurrentCategory"></HomeHeader>
        <!-- 轮播图-->
        <Suspense>
            <template #default>
                <HomeSwiper></HomeSwiper>
            </template>
            <template #fallback>
                <div>loading...</div>
            </template>
        </Suspense>

        <HomeList></HomeList>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Store, useStore } from 'vuex';
import { IGlobalState } from '@/store'
import HomeHeader from './home-header.vue';
import HomeList from './home-list.vue';
import HomeSwiper from './home-swiper.vue';
import { CATEGORY_TYPES } from '@/typings/home'
import * as Types from '@/store/action-types'
console.log(process.env.NODE_ENV)
console.log(process.env.AUTHOR)
console.log(process.env.BASE_URL)
// 专门为修改分类使用的 options api
function useCategory(store: Store<IGlobalState>) {
    let category = computed(() => store.state.home.currentCategory)
    function setCurrentCategory(category: CATEGORY_TYPES) {
        store.commit(`home/${Types.SET_CATEGORY}`, category)
    }
    return {
        category,
        setCurrentCategory
    }
}
export default defineComponent({
    name: 'Home',
    components: {
        HomeHeader,
        HomeList,
        HomeSwiper
    },
    setup() {
        let store = useStore<IGlobalState>()
        let { category, setCurrentCategory } = useCategory(store)
        return {
            category,
            setCurrentCategory
        }
    }
})
</script>