<template>
    <div class="home-swiper">
        <van-swipe v-if="sliderList.length" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="l in sliderList" :key="l.url">
                <img :src="l.url" style="max-width: 100%;">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<style lang="scss">

</style>
<script lang="ts">
import { IGlobalState } from '@/store';
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import * as Types from '@/store/action-types'
export default defineComponent({
    async setup() {
        // 页面一加载就要获取
        let store = useStore<IGlobalState>()
        let sliderList = computed(() => store.state.home.sliders)
        // sliderList.value 因为计算属性需要多.value
        if (sliderList.value.length === 0) { // 缓存 如果数据没有获取过才获取
            await store.dispatch(`home/${Types.SET_SLIDER_LIST}`)
        }
        return {
            sliderList
        }
    }

})
</script>