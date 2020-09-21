<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
  <!-- test -->
</template>

<script>

import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'
export default {
  components:{
    ToolBar,
    Spinner
  },
  date(){
    return{
      loadingStatus:false,
    };
  },
  methods:{
    startSpinner(){
      return this.loadingStatus=true;
    },
    endSpinner(){
      return this.loadingStatus=false;
    }
  },
  created(){
    bus.$on('start:spinner',this.startSpinner)
    bus.$on('end:spinner',this.endSpinner)
  },
  beforeDestroy(){
    bus.$off('start:spinner',this.startSpinner)
    bus.$off('end:spinner',this.endSpinner)
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  color: #34495E;
  text-decoration: none;
}
a.router-link-exact-active{
  text-decoration: underline;
}
a:hover{
  color:#42b883;
  text-decoration: underline;

}
/* Router transtion */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
