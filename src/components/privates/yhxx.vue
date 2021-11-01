<template>
  <div class="yhxx" v-if="show">
      <div>{{good.name}}</div>
      <div>
          <img v-for="i in 5" :key="i" :src="star(i,good.score)" alt="">
      </div>
      <div class="yhxxt">
          <div></div>
          <div>优惠信息</div>
          <div></div>
      </div>
      <div class="yhxxc">
          <div v-for="(item,index) in good.supports" :key="index+1000">
              <img ref="imgs" :src='kgs[index]' alt="">
              <span>{{item.description}}</span>
          </div>
      </div>
      <div class="yhxxt">
          <div></div>
          <div>商家公告</div>
          <div></div>
      </div>
      <div class="yhxxz">
          {{good.bulletin}}
      </div>
      <div class="xz" @click="xc()">
          x
      </div>
  </div>
</template>

<script>
export default {
    name:"yhxx",
    props:{
        good:Object,
        kgs:Array,
        show:Boolean
    },
    data(){
      return {
        imgs:[
          require("@/assets/img/star36_on@2x.png"),
          require("@/assets/img/star36_half@2x.png"),
          require("@/assets/img/star36_off@2x.png")
        ]
      }
    },
    methods:{
      star(i,score){
        if(i<=score){
          return this.imgs[0]
        }
        if(score%1!=0&&i+1>score){
          return this.imgs[1]
        }
        return this.imgs[2]
      },
      xc(){
        // this.show=false
        this.$emit("get",false)
      }
    }
}
</script>

<style>
.yhxx{
    background: rgba(7, 17, 27, 0.8);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999999;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.yhxx > div:first-child{
    font-size: 3.2rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    line-height: 3.2rem;
    margin-top: 12.8rem;
}
.yhxx > div:nth-child(2){
    margin-top: 3.2rem;
}
.yhxx > div:nth-child(2) > img{
    width: 4.8rem;
    height: 4.8rem;
    margin: 0 2rem;
}
.yhxxt{
    display: flex;
    align-items: center;
}
.yhxxt{
    margin-top: 5.6rem;
}
.yhxxt > div:first-child,.yhxxt > div:nth-child(3){
    width: 22.4rem;
    height: 0.2rem;
    background: rgba(255, 255, 255,0.2);
}
.yhxxt > div:nth-child(2){
    margin: 0 2.4rem;
    font-size: 2.8rem;
    font-weight: 700;
    color: white;
    line-height: 2.8rem;
}
.yhxxc{
    margin-top: 4.8rem;
}
.yhxxc > div > img{
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 1.2rem;
}
.yhxxc > div > span{
    font-size: 2.4rem;
    font-weight: 200;
    color: white;
    line-height: 2.4rem;
}
.yhxxc > div{
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
}
.yhxxz{
    width: 55rem;
    margin-top: 4.8rem;
    font-size: 2.4rem;
    font-weight: 200;
    color: white;
    line-height: 4.8rem;
}
.xz{
    position: absolute;
    font-size: 6.4rem;
    color: rgba(255, 255, 255,0.5);
    bottom: 6.4rem;
}
</style>