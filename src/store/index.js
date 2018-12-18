import Vue from 'vue';
import Vuex from 'vuex';
import blogList from './modules/blogList';
import echartsData from './modules/echartsData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blogList,
    echartsData
  },
  strict: true
})














