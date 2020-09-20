<template>
  <div>
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url" target='_blank'>{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.user}}</small>
      </p>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';

export default{
  
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>


<style>

</style>
