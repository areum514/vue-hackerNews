<template>
  <div>
    <div v-for="item in this.$store.state.items">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>
