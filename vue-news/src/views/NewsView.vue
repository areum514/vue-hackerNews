<template>
  <div>
    <div v-for="user in this.$store.state.news">{{user.title}}</div>
  </div>
</template>

<script>
//axios는 HTTP 클라이언트 라이브러리로써, 비동기 방식으로 HTTP 데이터 요청을 실행합니다.
export default{
  //fetchNewsList()
  
  created(){
    this.$store.dispatch('FETCH_NEWS');
    /* fetchNewsList()
    .then(response=>{
      console.log(response);
      this.users=response.data;
    })
    .catch(function(error){
      console.log(error);
    }) */
  }
}
</script>


<style>

</style>
