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
  newMessage(state, message) {
    state.inbox.push(message);
  },
};

const actions = {
  connect({ commit, rootState }) {
    commit('connectRequest');
    messageService.connect(rootState.settings.config.mqtt, rootState.document.documentTopic)
      .then(() => {
        commit('connectSuccess');
      },
      (error) => {
        console.log(error.toString());
        commit('connectFail', { error: error.toString() });
      },
      );
  },
  disconnect({ commit }) {
    commit('disconnect');
  },
};


export const network = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
