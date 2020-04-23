import Vue from 'vue';

import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(FlagIcon);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
