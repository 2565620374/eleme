<template>
  <div id="zuhe">
    <goodHead></goodHead>
    <goodTabBar></goodTabBar>
    <gwcCong></gwcCong>
    <router-view></router-view>
  </div>
</template>

<script>
import goodHead from "@/components/privates/GoodHead.vue"
import goodTabBar from "@/components/privates/GoodTabBar.vue"
import gwcCong from "@/components/privates/gwcCong.vue"

export default {
  name: 'zuhe',
  components:{
    goodHead,
    goodTabBar,
    gwcCong
  }
}
</script>

<style>

</style>