import Vuex from 'vuex';
import Vue from 'vue';
import todo from './modules/todo';

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules : {
        todo
    }
})