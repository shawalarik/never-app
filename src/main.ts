import './assets/main.css'

import router, { setupRouter } from '~/router'

import App from '~/App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupStore } from '~/stores'

async function bootstrap() {
    const app = createApp(App);

    setupStore(app);
    
    // app.use(router)
    setupRouter(app);


    app.mount('#app');
}

bootstrap();