import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import router from './router';
import App from './App.vue';
import store from './store';
import './assets/icon.css';

Vue.config.productionTip = false;
Vue.use(MuseUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
