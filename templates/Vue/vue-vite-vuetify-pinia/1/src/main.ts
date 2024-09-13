import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { i18n } from './plugins/i18n';
import { pinia } from './plugins/pinia';
import { vuetify } from './plugins/vuetify';

import './assets/main.css';
import 'vuetify/styles';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(pinia);
app.use(vuetify);

app.mount('#app');
