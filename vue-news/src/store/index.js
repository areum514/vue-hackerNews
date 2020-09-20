import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList} from '../api/index.js'
import {fetchJobswsList} from '../api/index.js'
import {fetchAsksList} from '../api/index.js'

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        news:[],
        jobs:[],
        items:[]
    },
    mutations:{
        SET_NEWS(state,news){
            state.news=news
        },
        SET_JOBS(state,jobs){
            state.jobs=jobs
        },
        SET_ASK(state,items){
            state.items=items
            
        }
    },

    actions:{
        FETCH_NEWS(context){
            fetchNewsList()
            .then(response=>{
                context.commit('SET_NEWS',response.data)
            })
            .catch(error=>{
                console.log(error);

            })
        },
        //ES6 Destructuring
        FETCH_JOBS({commit}){
            fetchJobswsList()
            .then(({data})=>{
                commit('SET_JOBS',data);
            })
            .catch(error=>{
                console.log(error);
            })
        },
        FETCH_ASK(context){
            fetchAsksList()
            .then(response=>{
                context.commit('SET_ASK',response.data)
            })
            .catch(error=>{
                console.log(error);

            })
        }

    }
});