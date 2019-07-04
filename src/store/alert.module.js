const state = {
  alert: {
    show: false,
    message: '',
  },
};

const actions = {
  setAlert({ commit }, newalert) {
    commit('setAlert', newalert);
    setTimeout(() => {
      commit('clearAlert');
    }, 3000);
  },
  success({ commit }, message) {
    commit('success', message);
  },
  error({ commit }, message) {
    commit('error', message);
  },
  clear({ commit }, message) {
    commit('success', message);
  },
};

const mutations = {
  setAlert(state, newalert) {
    state.alert.message = newalert;
    state.alert.show = true;
  },
  clearAlert(state) {
    state.alert.show = false;
  },
  success(state, message) {
    state.type = 'alert-success';
    state.message = message;
  },
  error(state, message) {
    state.type = 'alert-danger';
    state.message = message;
  },
  clear(state) {
    state.type = null;
    state.message = null;
  },
};

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations,
};
