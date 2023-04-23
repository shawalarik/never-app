import './assets/main.css'
import 'nprogress/nprogress.css'
import 'ant-design-vue/dist/antd.css';

import router, { setupRouter } from '~/router'

import App from '~/App.vue'
import { createApp } from 'vue'
import { initAppConfigStore } from './logics/initAppConfig';
import { setupRouterGuard } from './router/guard'
import { setupStore } from '~/stores'

async function bootstrap() {
    const app = createApp(App);

    setupStore(app);
    
    // app.use(router)
    setupRouter(app);

    setupRouterGuard(router);

    /**
     * 初始化内部系统配置
     */
    initAppConfigStore();
    
    app.mount('#app');
}

bootstrap();