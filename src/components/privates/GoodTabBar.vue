<template>
  <div class="goodTabBar">
      <router-link :class="{'cr':isShow[0]}" to="/commod" tag="div" @click.native="getCommod('/commod',1)">商品</router-link>
      <router-link :class="{'cr':isShow[1]}" to="/assess" tag="div" @click.native="getCommod('/assess',2)">评价</router-link>
      <router-link :class="{'cr':isShow[2]}" to="/store" tag="div" @click.native="getCommod('/store',3)">商家</router-link>
  </div>
</template>

<script>
export default {
    name:"goodTabBar",
    data(){
        return {
            isShow:[true,false,false]
        }
    },
    methods:{
        getCommod(v,i){
            this.isShow=[false,false,false]
            if(this.$route.path==v){
                this.isShow[i-1]=!this.isShow[i-1]
            }
        }
    },
    created(){
        
    }
}
</script>

<style>
.goodTabBar{
    display: flex;
    height: 8rem;
    align-items: center;
    background-color: white;
    border-bottom: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.goodTabBar div{
    flex:1;
    display: flex;
    justify-content: center;
    font-size: 2.8rem;
    color: rgb(77, 85, 93);
    line-height: 2.8rem;
}
.goodTabBar .cr{
    color: rgb(240, 20, 20);
}
</style>