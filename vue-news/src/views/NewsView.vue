<template>
  <div>
    <div v-for="user in users">{{user.title}}</div>
  </div>
</template>

<script>
//axios는 HTTP 클라이언트 라이브러리로써, 비동기 방식으로 HTTP 데이터 요청을 실행합니다.
//import {fetchNewsList} from '../api/index.js'
import axios from 'axios'
export default{
  //fetchNewsList()
  data(){
    return{
      users:[]
    }
  },
  created(){
    var vm=this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(function(response){
      console.log(response);
      vm.users=response.data;
    })
    .catch(function(error){
      console.log(error);
    })
  }
}
</script>


<style>

</style>
