<template>
  <div class="goodHead">
      <div class="goodHeadTop">
          <img :src="goods.avatar" alt="">
          <div class="goodHeadTopContent">
              <div>
                  <img src="@/assets/img/brand@2x.png" alt="">
                  <span>{{goods.name}}</span>
              </div>
              <div>{{goods.description}} / {{goods.deliveryTime}}分钟送到</div>
              <div v-for="(item,index) in goods.supports" :key="index+'zs'" v-if="index===i">
                  <img ref="imgs" :src='kgs[index]' alt="">
                  <span>{{goods.supports[index].description}}</span>
              </div>
          </div>
          <div @click="xs()">{{goods.supports.length}}个 <span>></span></div>
      </div>
      <div class="goodHeadBottom">
          <img src="@/assets/img/bulletin@2x.png" alt="">
          <div>{{goods.bulletin}}</div>
          <div>></div>
      </div>
      <yhxx @get="ss" :good="goods" :kgs="kgs" :show="isShow"></yhxx>
  </div>
</template>

<script>
import axios from 'axios'
import yhxx from "@/components/privates/yhxx.vue"
export default {
    name:"GoodHead",
    data(){
        return {
            goods:{},
            kgs:[
                require("@/assets/img/decrease_1@2x.png"),
                require("@/assets/img/discount_1@2x.png"),
                require("@/assets/img/special_1@2x.png"),
                require("@/assets/img/invoice_1@2x.png"),
                require("@/assets/img/guarantee_1@2x.png")
            ],
            i:0,
            isShow:false
        }
    },
    methods:{
        xs(){
            this.isShow=true
        },
        ss(v){
            this.isShow=v
        }
    },
    components:{
        yhxx
    },
    created(){
        axios.get("/static/json/seller.json").then((res)=>{
            this.goods=res.data.data
        })
    }
}
</script>

<style>
.goodHead{
    background-color: rgba(7, 17, 27, 0.5);
}
.goodHeadTop{
    display: flex;
    padding: 4.8rem 2.4rem 3.6rem 4.8rem;
}
.goodHeadTop > img{
    width: 12.8rem;
    height: 12.8rem;
    border-radius: 0.4rem;
    margin-right: 3.2rem;
}
.goodHeadTopContent{
    flex:1;
}
.goodHeadTopContent > div:first-child{
    display: flex;
    align-items: center;
    color: rgb(255, 255, 255);
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 3.6rem;
}
.goodHeadTopContent > div:first-child > img{
    width: 7rem;
    height: 4rem;
    margin-top: 0.4rem;
    margin-right: 1.2rem;
}
.goodHeadTopContent > div:nth-child(2){
    color: rgb(255, 255, 255);
    font-size: 2.4rem;
    font-weight: 200;
    line-height: 2.4rem;
    margin-top: 1.6rem;
}
.goodHeadTopContent > div:nth-child(3){
    display: flex;
    align-items: center;
    margin-top: 2rem;
    font-size: 2rem;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 2.4rem;
}
.goodHeadTopContent > div:nth-child(3) > img{
    width: 3rem;
    height: 3rem;
    margin-right: 0.8rem;
}
.goodHeadTop > div:last-child{
    align-self: flex-end;
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 2.4rem;
    height: 4.8rem;
    width: 11rem;
    padding: 1.5rem 2rem;
    border-radius: 2rem;
    background-color: rgba(0,0,0,0.2);
}
.goodHeadTop > div:last-child span{
    flex:1;
    display: flex;
    justify-content: flex-end;
}
.goodHeadBottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem;
    height: 5.6rem;
    font-size: 2rem;
    color: rgb(255, 255, 255);
    font-weight: 200;
    line-height: 5.6rem;
    background-color: rgba(7, 17, 27, 0.2);
}
.goodHeadBottom img{
    width: 6rem;
    height: 3rem;
    margin-right: 0.8rem;
}
.goodHeadBottom > div:nth-child(2){
    flex:1;
    height: 5.6rem;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>