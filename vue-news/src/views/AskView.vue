<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixns/ListMixin.js'
export default {
  components:{
    ListItem
  },
  
  mixins:[ListMixin],
}
</script>

<style>

</style>