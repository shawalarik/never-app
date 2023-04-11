<script lang="ts" setup>
import loginOut from "~/views/loginOut/index.vue"
import { Layout, LayoutSider, Menu, MenuItem, LayoutHeader, LayoutContent } from 'ant-design-vue';
import { reactive, ref } from "vue";
const lockEvents = () => {
}
const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);
const menulist = reactive([
    {
        name: 'nav 1',
    },
    {
        name: 'nav 2',
    },
    {
        name: 'nav 3',
    },
])
</script>

<template>
    <Layout :="lockEvents">
        <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <MenuItem v-for="(item, index) in menulist" :key="index">
                {{ item.name }}
                </MenuItem>
            </Menu>
        </LayoutSider>

        <!-- <Layout>
            <LayoutHeader style="background: #fff; padding: 0">
                这里不知道是什么
            </LayoutHeader>
        </Layout> -->
        <LayoutContent :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
            asasdasd
        </LayoutContent>


        <loginOut></loginOut>
    </Layout>
</template>
