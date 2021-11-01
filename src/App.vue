<template>
  <div id="app">
    <router-view name="good"></router-view>
    <router-view name="zuhe"></router-view>
  </div>
</template>

<script>
let w=document.documentElement.clientWidth
let zyy=w/75
document.documentElement.style.fontSize=zyy+"px"

export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style>
@import url(./assets/reset.css)
</style>
