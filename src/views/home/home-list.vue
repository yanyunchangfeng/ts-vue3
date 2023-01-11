<template>
    <div class="home-list">
        <van-card v-for="ll in lessonList" :key="ll.id" :price="ll.price" :title="ll.title" :thumb="ll.poster">
            <template #tags>
                <van-tag plain type="danger">
                    {{ formateCategory(ll.category) }}
                </van-tag>
            </template>
        </van-card>
    </div>
</template>
<script lang="ts">
import { ILesson } from '@/typings/home';
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    props: {
        lessonList: {
            type: Array as PropType<ILesson[]>
        }
    },
    setup() {
        // 页面一加载就要获取数据
        function formateCategory(type: number) {
            switch (type) {
                case 1:
                    return 'React课程'
                case 2:
                    return 'Electron课程'
                case 3:
                    return 'Angular课程'
                case 4:
                    return 'Node课程'
            }
        }
        return {
            formateCategory
        }
    }
})
</script>