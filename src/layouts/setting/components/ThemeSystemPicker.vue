<template>
    <div :class=prefixCls>
        <template v-for="color in colorList" :key="color">
            <span 
                @click="handleClick(color)"
                :style="{ background: color, border: `1px solid ${color === '#ffffff' ? '#4dd0e1' : color}` }"
                :class="[
                    `${prefixCls}__item`,
                    {
                        [`${prefixCls}__item--active`]: def === color,
                    }
                ]"
            >
                <CheckOutlined/>
            </span>
        </template>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { updateAppSystemBgColor } from '~/logics/theme/updateBackground';
import { APP_SYSTEM_PRESET_COLOR_LIST } from '~/settings/designSetting';
import { CheckOutlined } from '@ant-design/icons-vue';

const prefixCls = 'theme-system-picker';
let def = ref<string>('#ffffff');

const colorList = reactive(APP_SYSTEM_PRESET_COLOR_LIST);
const handleClick = (color: string) => {
    def.value = color;
    updateAppSystemBgColor(color);
}

</script>

<style lang="less">
  @prefix-cls: ~'~{namespace}-setting-theme-picker';
.theme-system-picker {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;
    justify-content: space-around;
    > span {
        width: 20px;
        height: 20px;
        cursor: pointer;
        // border: 1px solid rgba(#ddd, 10%);
        border-radius: 2px;
        > span {
            svg {
                display: none;
            }
        }
    }
    .theme-system-picker__item--active {
        border: 1px solid rgba(@primary-color, 10%);
        svg {
            display: inline-block;
            margin: 0 0 3px 3px;
            font-size: 12px;
            fill: @white !important;
        }
    }
}
</style>