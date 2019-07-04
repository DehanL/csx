import { apiService } from '../services';

const state = {
  config: null,
};

const getters = {
};

const mutations = {
  setClientId(state) {
    state.config.mqtt.clientId = `client-id-${Math.floor(Math.random() * 1000)}`;
  },
  setConfig(state, { config }) {
    state.config = config;
  },
};

const actions = {
  getConfig({ commit, dispatch }, station) {
    apiService.getConfig(station)
      .then(
        (config) => {
          commit('setConfig', config);
        },
        () => {
          dispatch('alert/setAlert', 'Unable to load configuration parameters', { root: true });
        },
      );
  },
};


export const settings = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
