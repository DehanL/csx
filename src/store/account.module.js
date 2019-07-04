import { userService } from '../services';
import router from '../router';

const cache = JSON.parse(localStorage.getItem('user'));
const state = cache
  ? { status: { loggedIn: true }, user: { id: cache.id } }
  : { status: { loggedIn: false }, user: { id: '' } };

const actions = {
  login({ dispatch, commit }, { id, password }) {
    commit('loginRequest', { id });

    userService.login(id, password)
      .then(
        (user) => {
          dispatch('alert/setAlert', 'User login success', { root: true });
          commit('loginSuccess', user);
          router.push('/');
        },
        (error) => {
          commit('loginFailure', error);
          dispatch('alert/setAlert', error, { root: true });
        },
      );
  },
  logout({ commit }) {
    userService.logout();
    commit('logout');
    router.push('/login');
  },
  register({ dispatch, commit }, user) {
    commit('registerRequest');

    userService.register(user)
      .then(
        () => {
          commit('registerSuccess');
          router.push('/login');
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true });
          });
        },
        (error) => {
          commit('registerFailure');
          dispatch('alert/error', error, { root: true });
        },
      );
  },
};

const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest(state) {
    state.status = { registering: true };
  },
  registerSuccess(state) {
    state.status = {};
  },
  registerFailure(state) {
    state.status = {};
  },
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations,
};
