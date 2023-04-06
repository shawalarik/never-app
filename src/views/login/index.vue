<script setup lang="ts">
import { useUserStoreWithOut } from '~/stores/modules/user';
const userStore = useUserStoreWithOut();
const clickLogin = () => {
    let userInfoParam = '已登录';
    let useInfo = userStore.login(userInfoParam);
    console.log('这是个啥？', useInfo)
}
</script>
<template>
    <span>这是登录页</span>
    <p style="cursor: pointer" @click="clickLogin()">点击我登录</p>
</template>