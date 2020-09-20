<template>
  <div>
      <p>name : {{userInfo.id}}</p>
      <p>karma : {{userInfo.karma}}</p>
      <p>created : {{userInfo.created}}</p>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  //근데 이거보다 ...mapGetters이게 더 나아~ 근데 이것도 있다는걸 보여주기 위해서 남김
  computed:{
    userInfo(){
      return this.$store.state.user
    }
  },
 created(){
  const userName=this.$route.params.id
  this.$store.dispatch('FETCH_USERS',userName);
  }
}
/* 
이렇게 직접적으로도 할수 있지만... 이렇게 노노노 
import axios from 'axios'
export default {
 created(){
   console.log(this.$route.params.id);
   axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`);
  }
} */
</script>

<style>

</style>