<template>
  <div class="score">
    <!-- 评分 -->
      <div class="pjLeft">
        <div>{{goods.score}}</div>
        <div>综合评分</div>
        <div>高于周边商家{{goods.rankRate}}%</div>
      </div>
      <div class="pjRight">
        <div>
          <div>服务态度</div>
          <img v-for="i in 5" :key="i" :src="star(i,goods.serviceScore)" alt="">
          <div>{{goods.serviceScore}}</div>
        </div>
        <div>
          <div>服务态度</div>
          <img v-for="i in 5" :key="i+8" :src="star(i,goods.foodScore)" alt="">
          <div>{{goods.foodScore}}</div>
        </div>
        <div>
          <div>送达时间</div>
          <div>44分钟</div>
        </div>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"score",
    data(){
    return {
      goods:{},
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
    }
  },
  created(){
    axios.get("/static/json/seller.json").then((res)=>{
            this.goods=res.data.data
    })
  }
}
</script>

<style>
/* 服务 */
.score{
  padding: 3.6rem 0;
  display: flex;
  border-bottom: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.pjLeft{
  width: 27.5rem;
  text-align: center;
  border-right: 0.1rem solid rgba(0, 0, 0, 0.2);
}
.pjLeft > div:first-child{
  font-size: 4.8rem;
  color: rgb(255, 153, 0);
  line-height: 5.6rem;
}
.pjLeft > div:nth-child(2){
  font-size: 2.4rem;
  color: rgb(7, 17, 27);
  line-height: 2.4rem;
  margin-top: 1.2rem;
}
.pjLeft > div:nth-child(3){
  font-size: 2rem;
  color: rgb(7, 17, 27);
  line-height: 2rem;
  margin-top: 1.6rem;
  padding-bottom: 1.2rem;
}
.pjRight{
  width: 47.4rem;
  padding: 0 4.8rem;
}
.pjRight > div{
  display: flex;
  align-items: center;
}
.pjRight > div:nth-child(2){
  margin-top: 1.6rem;
}
.pjRight > div:nth-child(3){
  margin-top: 1.6rem;
}
.pjRight > div > div:first-child{
  font-size: 2.4rem;
  color: rgb(7, 17, 27);
  line-height: 3.6rem;
  flex-shrink: 0;
  margin-right: 2.4rem;
}
.pjRight > div img{
  width: 3.6rem;
  height: 3.6rem;
  margin-left: 0.5rem;
}
.pjRight > div > div:last-child{
  font-size: 2.4rem;
  color: rgb(255, 153, 0);
  margin-left: 2.4rem;
}
.pjRight > div:last-child > div:first-child{
  margin-right: 0.7rem;
}
.pjRight > div:last-child > div:last-child{
  font-size: 2.4rem;
  color: rgb(147, 153, 159);
}
</style>