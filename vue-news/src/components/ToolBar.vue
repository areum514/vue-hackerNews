<template>
  <nav class="header">
      <router-link to='/news'>News </router-link> | 
      <router-link to='/ask'>Ask </router-link> | 
      <router-link to='/jobs'>Jobs </router-link>
  </nav>
</template>


<style scoped>
.header{
    color: white;
    background-color: #42b883;
    padding:8px;
}
.header .router-link-exact-active{
    color:#35495e;
    
}
.header a{
    color:white;
    text-decoration: none;
}

</style>