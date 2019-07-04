import { messageService } from '../services';
// import router from '../router';

const state = {
  broker: {
    status: '',
    error: '',
  },
  inbox: [],
};

const getters = {
  // checkDocumentOpen(state) {
  //   return state.document.status;
  // },
};

const mutations = {
  connectRequest(state) {
    state.broker.status = 'connecting';
  },
  connectSuccess(state) {
    state.broker.status = 'connected';
  },
  connectFail(state, { error }) {
    state.broker.status = 'disconnected';
    state.broker.error = error;
  },
  disconnect(state) {
    state.broker.status = 'disconnected';
    state.broker.site = { ctc: '', system: '', station: '' };
  },
};

const actions = {
  connect({ commit, dispatch, rootState }) {
    commit('connectRequest');
    // Uset the current user as the MQTT client id
    commit('settings/setClientId', null, { root: true });
    messageService.connect(rootState.settings.config.mqtt, rootState.document.documentTopic)
      .then(() => {
        commit('connectSuccess');
        dispatch('alert/setAlert', 'Connected to MQTT Broker', { root: true });
      },
      (error) => {
        dispatch('alert/setAlert', error.toString(), { root: true });
        commit('connectFail', { error: error.toString() });
      },
      );
  },
  disconnect({ commit }) {
    commit('disconnect');
  },
  newMessage({ dispatch }, message) {
    dispatch('document/processMessage', message, { root: true });
  },
};


export const network = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
