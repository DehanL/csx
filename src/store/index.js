import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';
import { document } from './document.module';
import { network } from './network.module';
import { settings } from './settings.module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    alert,
    account,
    users,
    document,
    network,
    settings,
  },
});

export default store;
