<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="fetchedItem">
      <router-link :to='`/user/${fetchedItem.user}`'
      slot="username">
            {{fetchedItem.user}}
      </router-link>
      <template slot="time">{{'Posted '+ fetchedItem.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{fetchedItem.title}}</h2>
    </section>
    <section> 
    <!-- 질문 댓글 -->
      <div v-html='fetchedItem.content'></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import {mapGetters} from 'vuex'

export default {
  components:{
    UserProfile
  },
 computed:{
    ...mapGetters(['fetchedItem']),
  },
created(){
  this.$store.dispatch('FETCH_ITEM',itemId)
  .then(()=>{
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error)=>{
        console.log(error);
      })
}
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5em;
}
.fa-user{
font-size: 2.5em;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7em;
}
</style>