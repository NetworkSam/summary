import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 100
};

// const actions = {
//
// };


const getters = {
    count(state){
        return state.count+10;
    }
};

export default new Vuex.Store({
    state,
    getters
});
