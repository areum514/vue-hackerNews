<template>
  <div>
    <div v-for="job in jobs">{{job.title}}</div>
  </div>
</template>

<script>
import {fetchJobswsList} from '../api/index.js'
export default {
 data(){
    return{
      jobs:[]
    }
  },
  created(){
    var vm=this;
    fetchJobswsList()
    .then(function(response){
      console.log(response);
      vm.jobs=response.data;
    })
    .catch(function(error){
      console.log(error);
    })
  }
}
</script>

<style>

</style>
