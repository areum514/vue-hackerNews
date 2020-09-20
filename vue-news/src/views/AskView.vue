<template>
  <div>
   
    <p v-for="item in fetchedAsk">
      <a v-bind:href="item.url" target='_blank'>{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.user}}</small>
     
    </p>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
  computed:{
    //fetchedAsk를 바로 쓰고 싶다면 배열로 연결
    ...mapGetters(['fetchedAsk',
    ]) 
    //#3-1 객체로 
    /* ...mapGetters({
      
      fetchedAsk:'fetchedAsk',
    }),  */
    //#2
    /* ...mapState({
      ask:state=>state.ask
    }) */
    //#1
    /* ask(){
      return this.$store.state.ask;
    } */
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>
