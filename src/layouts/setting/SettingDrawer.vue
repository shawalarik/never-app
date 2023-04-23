<template> 
    <Button type="primary" @click="showDrawer">设置</Button>
    <Drawer 
        v-model:visible="visible"
        class="custom-class"
        style="color: red"
        title="项目配置"
        placement="right"
        @after-visible-change="afterVisibleChange"
    >
        <Divider>系统颜色设置</Divider>
        <ThemeSystemPicker />
    </Drawer>
</template>

<script lang="ts" setup>

import { Button, Drawer, Divider } from 'ant-design-vue';
import { ref } from 'vue';
import ThemeSystemPicker from '~/layouts/setting/components/ThemeSystemPicker.vue';

const visible = ref<boolean>(false);

const afterVisibleChange = (bool: boolean) => {
};

const showDrawer = () => {
    visible.value = true;
};

</script>