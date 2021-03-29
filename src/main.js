import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import iconCogs from './components/icons/cogs.vue';
import iconSearch from './components/icons/search.vue';
import iconPlus from './components/icons/plus.vue';
import fieldInput from './components/FieldInput.vue';

const app = createApp(App);

app.component('icon-cogs', iconCogs);
app.component('icon-search', iconSearch);
app.component('icon-plus', iconPlus);
app.component('field-input', fieldInput);

app.use(store).use(router).mount('#app');
