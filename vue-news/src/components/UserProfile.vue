<template>
  
  <div class="user-container">
        <div>
          <i class="fas fa-user fa-3x" ></i>
        </div>

        <div class="user-description">
            <div>{{info.id}}</div>
          <div class="time">
            {{info.created}}
          </div>
        </div>
      </div>
</template>

<script>
export default {
props:{
    info:Object
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