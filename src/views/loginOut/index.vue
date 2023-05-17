<script setup lang="ts">
import { Button } from "ant-design-vue"
import { useUserStoreWithOut } from '~/stores/modules/user';

const userStore = useUserStoreWithOut();
const clickLoginOut = () => {
    userStore.confirmLoginOut();
}
</script>
<template>
    <Button style="cursor: pointer" type="primary" @click="clickLoginOut">点击我退出</Button>
</template>