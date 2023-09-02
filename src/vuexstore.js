//$Id$

import Vue from "vue"; //No I18N
import Vuex from 'vuex'; //No I18N


import chatstore from './store/chat/chatStore.js';

Vue.use(Vuex);

let store = new Vuex.Store({
    debug: true,
    
    state: {},
    
    actions: {},

    mutations: {},

    getters: {},

    modules: {
        chatstore
    }
});

export default store;