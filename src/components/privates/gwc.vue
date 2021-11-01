<template>
  <div class="gwc">
      <div>
          <div @click="jg" :class="{bl:$store.state.count==1}"><img src="@/assets/img/购物车-fill.png" alt=""></div>
      </div>
      <div>￥0</div>
      <div>另需配送费￥4元</div>
      <div>￥20起送</div>
  </div>
</template>

<script>
export default {
    name:"gwc",
    methods:{
        jg(){
            if(this.$store.state.count==0){
                this.$store.state.count++
            }else{
                this.$store.state.count=0
            }
        }
    }
}
</script>

<style>
.gwc{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10rem;
    background-color: #141d27;
    display: flex;
    align-items: center;
    z-index: 1000;
}
.gwc > div:first-child{
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11.6rem;
    height: 11.6rem;
    border-radius: 50%;
    background-color: #141d27;
    margin: 0 2.4rem;
    z-index: 2;
}
.gwc > div:first-child > div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.05);
}
.gwc > div:first-child > div > img{
    width: 4.4rem;
    height: 4.4rem;
}
.gwc > div:nth-child(2){
    color: rgba(255, 255, 255, 0.616);
    margin-left: 16rem;
    font-size: 3rem;
    margin-right: 2.4rem;
}
.gwc > div:nth-child(3){
    width: 31rem;
    color: rgba(255, 255, 255, 0.616);
    font-size: 2.5rem;
    padding: 1rem 2.4rem;
    border-left: 0.1rem solid rgba(255, 255, 255, 0.4);
}
.gwc > div:nth-child(4){
    width: 21rem;
    height: 100%;
    margin-right: 0;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.4);
    font-size: 3rem;
}
.bl{
    background: rgb(0, 160, 220) !important;
}
</style>