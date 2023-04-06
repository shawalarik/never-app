import type { App } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const stores = createPinia();

export function setupStore(app: App<Element>) {
    stores.use(piniaPluginPersistedstate);
    app.use(stores);
}

export { stores }