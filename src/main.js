import Vue from 'vue';
import MuseUI from 'muse-ui';
import Toast from 'muse-ui-toast';
import 'muse-ui/dist/muse-ui.css';
import router from './router';
import App from './App.vue';
import store from './store';
import './assets/icon.css';

Vue.config.productionTip = false;
Vue.use(MuseUI);
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
