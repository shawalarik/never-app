<script setup lang="ts">
import { useUserStoreWithOut } from '~/stores/modules/user';
const userStore = useUserStoreWithOut();
const clickLogin = () => {
    let userInfoParam = {
        userId: '999',
        userName: 'admin'
    };
    let useInfo = userStore.login(userInfoParam);
    console.log('这是个啥？', useInfo)
}
</script>
<template>
    <p style="cursor: pointer" @click="clickLogin()">login</p>

    <div>
        
    </div>
    <!-- <div :class="prefixCls" class="relative w-full h-full px-4"> -->
    <!-- </div> -->
</template>