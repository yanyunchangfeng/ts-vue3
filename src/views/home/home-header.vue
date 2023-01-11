<template>
    <div class="home-header">
        <img src="@/assets/logo.png" alt="">
        <van-dropdown-menu>
            <van-dropdown-item :model-value="category" :options="options" @change="change" />
        </van-dropdown-menu>
    </div>
</template>
<style lang="scss">
.home-header {
    height: 65px;
    background: #2a2a2a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5%;
    position: fixed;
    top: 0;
    left: 0;
    width: 95%;
    z-index: 100;

    img {
        height: 50px;
    }

    .van-dropdown-menu__title {
        color: #fff;
    }

    .van-dropdown-menu__bar {
        background: #2a2a2a;
    }
}
</style>
<script lang="ts">
import { CATEGORY_TYPES } from '@/typings/home';
import { defineComponent, PropType, reactive, toRefs } from 'vue';
export default defineComponent({
    props: {
        category: {
            type: Number as PropType<CATEGORY_TYPES>
        }
    },
    emits: ['setCurrentCategory'],// 为了提示作用的
    setup(props, context) {
        let state = reactive({
            options: [
                { text: "全部课程", value: CATEGORY_TYPES.ALL },
                { text: "React课程", value: CATEGORY_TYPES.REACT },
                { text: "Electron课程", value: CATEGORY_TYPES.ELECTRON },
                { text: "Node课程", value: CATEGORY_TYPES.NODE }
            ]
        })
        function change(value: CATEGORY_TYPES) {
            context.emit('setCurrentCategory', value)
        }
        return {
            ...toRefs(state),
            change
        }
    }
})
</script>