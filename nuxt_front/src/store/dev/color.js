import _ from 'lodash';
import { Api } from '~/plugins/axios-rest-client';

const SET_ITEMS = 'SET_ITEMS';
const EDIT_ITEM = 'EDIT_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CREATE_ITEM = 'CREATE_ITEM';


export const state = () => ({
  items: []
});

export const getters = {
  items: state => state.items,
  byId: state => (id) => _.find(state.items, (el) => el.id === id),
};

export const actions = {
  async getColors({ commit }, filters) {
    let res = await Api['color.json']();
    commit('SET_ITEMS', res.data);
    return res.data;
  },
  create ({ commit }, payload) {
    commit('CREATE_ITEM', payload);
  },
  edit ({ commit }, payload) {
    commit('EDIT_ITEM', payload);
  },
  remove ({ commit }, id) {
    commit('REMOVE_ITEM', id);
  }
};

export const mutations = {
  [SET_ITEMS] (state, payload) {
    state.items = payload;
  }, 
  [CREATE_ITEM] (state, payload) {
    state.items.push(payload);
  },
  [EDIT_ITEM] (state, payload) {
    let index = _.findIndex(state.items, el => el.id === payload.id);
    state.items[index] = payload;
  },
  [REMOVE_ITEM] (state, id) {
    let index = _.findIndex(state.items, el => el.id === id);
    state.items.splice(index, 1);
  }
}