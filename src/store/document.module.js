import { apiService } from '../services';
import router from '../router';

const state = {
  documentStatus: 'closed',
  documentSite: {
    ctc: '',
    system: '',
    station: '',
  },
  elements: [],
};

const getters = {
  checkDocumentOpen(state) {
    return state.documentStatus;
  },
};

const mutations = {
  openRequest(state) {
    state.documentStatus = 'connecting';
  },
  openSuccess(state, { ctc, system, station, data }) {
    state.documentStatus = 'open';
    state.documentSite = { ctc, system, station };
    console.log('The elements are: ');
    console.log(data);
    state.elements = data;
  },
  openFail(state) {
    state.documentStatus = 'closed';
  },
  close(state) {
    state.documentStatus = 'closed';
    state.documentSite = { ctc: '', system: '', station: '' };
  },
};

const actions = {
  open({ commit }, { ctc, system, station }) {
    // Fetch station objects
    apiService.getObjects(ctc, system, station)
      .then(
        (data) => {
          commit('openSuccess', { ctc, system, station, data });
          router.push({ name: 'control', params: { ctc, system, station } });
        },
        () => commit('openFail'),
      );
  },
  close({ commit }) {
    commit('close');
    router.push('/open');
  },
};


export const document = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
