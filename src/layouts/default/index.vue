<script lang="ts" setup>
import loginOut from "~/views/loginOut/index.vue"
import SettingDrawer from '~/layouts/setting/SettingDrawer.vue';
import { Layout, LayoutSider, Menu, MenuItem, LayoutHeader, LayoutContent } from 'ant-design-vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { reactive, ref } from "vue";
import { GLOB_APP_TITLE } from "~/utils/GetPageTitle";
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
]);

const logoTitle = GLOB_APP_TITLE;
</script>

<template>
    <Layout :="lockEvents" class="never-app">
        <LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible style="cursor: pointer;">
            <div class="logo">
                <img src="./../../assets/images/logo.png"/>
                <div class="never-app-logo-title ml-2">{{ logoTitle }}</div>
            </div>
            <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <MenuItem v-for="(item, index) in menulist" :key="index">
                {{ item.name }}
                </MenuItem>
            </Menu>
        </LayoutSider>

        <Layout>
            <LayoutHeader style="background: #fff; padding: 0">
                <MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)"></MenuUnfoldOutlined>
                <MenuUnfoldOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)"></MenuUnfoldOutlined>
            </LayoutHeader>
        </Layout>
        <LayoutContent :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
            asasdasd
        </LayoutContent>
        <SettingDrawer></SettingDrawer>
        <loginOut></loginOut>
    </Layout>
</template>

<style scoped lang="less">
.never-app {
    height: 100%;
    .logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
        height: 48px;
        padding: 10px 4px 10px 10px;
        font-style: normal;
        line-height: 0;
        text-align: center;
        padding-left: 7px;
        > img {
            width: 32px;
            height: 32px;
        }
        .never-app-logo-title {
            font-size: 16px;
            font-weight: 700;
            transition: all 0.5s;
            line-height: normal;
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-left: 8px;
        }
    }
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>