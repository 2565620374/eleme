<template>
  <div class="assess">
    <score></score>
    <discuss></discuss>
  </div>
</template>

<script>
import score from "@/components/privates/score.vue"
import discuss from "@/components/privates/discuss.vue"
export default {
  name:"assess",
  components:{
    score,
    discuss
  }
}
</script>

<style>
.assess{
  height: 87rem;
  overflow-y: scroll;
}
</style>