<template>
    <div class="home-container" ref="refreshElm">
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
        <div v-if="isLoading">Loading...</div>
        <div v-if="!hasMore">我是有底线的...</div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue';
import { Store, useStore } from 'vuex';
import { IGlobalState } from '@/store'
import HomeHeader from './home-header.vue';
import HomeList from './home-list.vue';
import HomeSwiper from './home-swiper.vue';
import { CATEGORY_TYPES } from '@/typings/home'
import * as Types from '@/store/action-types'
import { useLoadMore } from '@/hooks'
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
        const refreshElm = ref<null | HTMLElement>(null)
        const { isLoading, hasMore } = useLoadMore(refreshElm, store, `home/${Types.SET_LESSON_LIST}`)
        return {
            category,
            setCurrentCategory,
            lessonList,
            refreshElm,
            isLoading,
            hasMore
        }
    }
})
</script>
<style lang="scss">
.home-container {
    position: absolute;
    top: 65px;
    bottom: 50px;
    width: 100%;
    overflow-y: scroll;
}
</style>