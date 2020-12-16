import 'normalize.css';
import Vue, { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

Vue.config.productionTip = false;

createApp(App).use(router).mount('#app');
