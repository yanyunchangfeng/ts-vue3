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
        <!--课程列表-->
        <HomeList :lessonList="lessonList"></HomeList>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
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
function useLessonList(store: Store<IGlobalState>) {
    const lessonList = computed(() => store.state.home.lessons.list);
    onMounted(() => {
        if (lessonList.value.length === 0) {
            store.dispatch(`home/${Types.SET_LESSON_LIST}`)
        }
    })
    return { lessonList }
}
export default defineComponent({
    name: 'Home',
    components: {
        HomeHeader,
        HomeList,
        HomeSwiper
    },
    setup() {
        // 1.需要获取vuex中的分类状态，有个更改状态的功能
        let store = useStore<IGlobalState>();
        // 分类
        let { category, setCurrentCategory } = useCategory(store);
        // 课程获取
        let { lessonList } = useLessonList(store)
        return {
            category,
            setCurrentCategory,
            lessonList
        }
    }
})
</script>
<style lang="scss">
.home {
    margin-bottom: 50px
}
</style>