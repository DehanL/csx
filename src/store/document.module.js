import { apiService, messageService } from '../services';
import router from '../router';
import Vue from 'vue';

const state = {
  documentStatus: 'closed',
  documentSite: {
    ctc: '',
    system: '',
    station: '',
  },
  elements: [],
  documentTopic: 'ctc/pta/bky/indications',
};

const getters = {
  checkDocumentOpen(state) {
    return state.documentStatus;
  },
  getElement: state => id => state.elements.find(element => element.id === id),
};

const mutations = {
  openRequest(state) {
    state.documentStatus = 'connecting';
  },
  openSuccess(state, { ctc, system, station, data }) {
    state.documentStatus = 'open';
    state.documentSite = { ctc, system, station };
    state.elements = data;
    state.documentTopic = `ctc/${ctc}/${station}/indications`;
  },
  openFail(state) {
    state.documentStatus = 'closed';
  },
  close(state) {
    state.documentStatus = 'closed';
    state.documentSite = { ctc: '', system: '', station: '' };
  },
  setIndication(state, msg) {
    // Find target element
    const pos = state.elements.findIndex(element => element.id === msg.element);
    const newElement = state.elements[pos];
    // Create temp element reflecting new values
    newElement.bits.indications[msg.bit] = msg.value;
    // Do a set to trigger reactivity
    Vue.set(state.elements, pos, newElement);
    // state.elements[pos].bits.indications[msg.bit] = msg.value;
  },
};

const actions = {
  open({ commit, dispatch }, { ctc, system, station }) {
    // Fetch station objects
    apiService.getObjects(ctc, system, station)
      .then(
        (data) => {
          // Also load config for that station
          dispatch('settings/getConfig', station, { root: true });
          // Alert that the open was a success
          dispatch('alert/setAlert', 'Elements loaded successfully ', { root: true });
          commit('openSuccess', { ctc, system, station, data });
          // Finally navigate to control page
          router.push({ name: 'control', params: { ctc, system, station } });
        },
        () => commit('openFail'),
      );
  },
  close({ commit }) {
    commit('close');
    router.push('/open');
  },
  processMessage({ commit }, message) {
    // Parse mesage
    const msg = JSON.parse(message.payloadString);
    commit('setIndication', msg);
  },
  sendControl({ dispatch }, control) {
    messageService.sendControl(control)
      .then(
        () => {
          dispatch('alert/setAlert', 'Control has been sent', { root: true });
        },
        (error) => {
          dispatch('alert/setAlert', error, { root: true });
        },
      );
  },

};

// function updateModel() {
//   apiService.updateModel(state.elements);
// }

export const document = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
