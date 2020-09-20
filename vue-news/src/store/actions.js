
import {fetchNewsList, fetchJobswsList, fetchAsksList,fetchUserInfo} from '../api/index.js'

export default{
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
        },
        FETCH_USERS({commit},name){
            fetchUserInfo(name)
            .then(({data})=>{
                commit('SET_USER',data)
            })
            .catch(error=>{
                console.log(error);

            })
        },
    }
