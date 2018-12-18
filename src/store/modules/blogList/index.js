import * as types from './types';

const state = {
  blogList: [],
};

const getters = {};

const actions = {

};

const mutations = {
  [types.GET_BLOGLIST](state, {
    value
  }) {
    state.blogList = value.data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

