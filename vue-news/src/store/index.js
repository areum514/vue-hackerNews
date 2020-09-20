import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'
Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        ask:[],
        user:{},
        item:{}
    },
    //computed랑 동일한 속성인데 다만 store에 있는 것
    getters:{
        fetchedAsk(state){
            return state.ask;
        }

    },
    mutations,
    actions
});