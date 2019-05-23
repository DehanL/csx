import { tasService } from '../services';
import router from '../router';

const state = {
  status: {
    connecting: false,
  },
  site: {
    ctc: '',
    system: '',
    station: '',
  },
  objects: {
  },
};

const mutations = {
  objectsfetched(state, objects) {
    state.objects = objects;
    state.status.connecting = false;
  },
  connectRequest(state) {
    state.status.connecting = true;
  },
};

const actions = {
  getObjects({ commit }, { ctc, system, station }) {
    commit('connectRequest', true);
    tasService.getObjects(ctc, system, station)
      .then(
        (objects) => {
          commit('objectsfetched', objects);
          commit('connectRequest');
          router.push('/control');
        },
      );
  },

};


export const tas = {
  namespaced: true,
  state,
  actions,
  mutations,
};
