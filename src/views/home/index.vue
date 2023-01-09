<template>
    <div class="home">
        <HomeHeader :category="category" @setCurrentCategory="setCurrentCategory"></HomeHeader>
        <HomeSwiper></HomeSwiper>
        <HomeList></HomeList>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Store, useStore } from 'vuex';
import { IGlobalState } from '@/store'
import { computed } from 'vue'
import HomeHeader from './home-header.vue';
import HomeList from './home-list.vue';
import HomeSwiper from './home-swiper.vue';
import { CATEGORY_TYPES } from '@/typings/home'
import * as Types from '@/store/action-types'
console.log(process.env.NODE_ENV)
console.log(process.env.AUTHOR)
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