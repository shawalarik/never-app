<template>
    <div class="theme-system-picker">
        <template v-for="color in colorList" :key="color">
            <span 
                @click="handleClick(color)"
                :style="{ background: color }"
            >
                <CheckOutlined />
            </span>
        </template>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { updateAppSystemBgColor } from '~/logics/theme/updateBackground';
import { APP_SYSTEM_PRESET_COLOR_LIST } from '~/settings/designSetting';
import { CheckOutlined } from '@ant-design/icons-vue';

const colorList = reactive(APP_SYSTEM_PRESET_COLOR_LIST);

const handleClick = (color: string) => {
    updateAppSystemBgColor(color);
}
</script>

<style lang="less">
.theme-system-picker {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;
    justify-content: space-around;
    > span {
        width: 20px;
        height: 20px;
        cursor: pointer;
        // border: 1px solid #ddd;
        border-radius: 2px;
    }
}
</style>