<script setup lang="ts">
import { useUserStoreWithOut } from '~/stores/modules/user';

const userStore = useUserStoreWithOut();
const clickLoginOut = () => {
    let userInfoParam = '已退出登录';
    userStore.resetState();
}
</script>
<template>
    <button style="cursor: pointer" @click="clickLoginOut()">点击我退出</button>
</template>