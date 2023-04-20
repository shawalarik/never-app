<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ConfigProvider } from 'ant-design-vue';

/**
 * 这里还可以放入全局化的各种配置，比如国际化 zh-en
 */
const getAntdLocale = {
  theme: {
    primaryColor: '#18a058',
  },
  locale: "zh-cn"
}
</script>

<template>
  <ConfigProvider :locale="getAntdLocale">
    <RouterView />
  </ConfigProvider>
</template>

<style lang="less">
@import url('ant-design-vue/dist/antd.variable.less');
@import url('~/assets/styles/var.css');
@import url('~/assets/styles/common.less');
</style>
