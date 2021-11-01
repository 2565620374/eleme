<template>
  <div>
      <gwc></gwc>
      <gwcContent></gwcContent>
  </div>
</template>

<script>
import gwc from "@/components/privates/gwc.vue"
import gwcContent from "@/components/privates/gwcContent.vue"
export default {
    name:"gwcCong",
    components:{
        gwc,
        gwcContent
    }
}
</script>

<style>

</style>