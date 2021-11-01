<template>
  <div class="commod">
      <div class="commodNavBar" >
        <div v-for="(item) in goods" :key="item.name">
          <div><img :src="kgs[item.type]" v-if="item.type!==-1">{{item.name}}</div>
        </div>
      </div>
      <div class="goodsList">
         <div v-for="(item,ind) in goods" :key="item.foods.sellCount">
           <div class="goodsClass">
            {{item.name}}
           </div>
           <div @click="getGood(value)" class="goodsByList" v-for="(value,index) in item.foods" :key="index+'ss'">
              <img :src="value.icon" alt="">
              <div class="goodsByListContent">
                <div>{{value.name}}</div>
                <div>{{value.description}}</div>
                <div>月售1132份 好评率{{value.rating}}%</div>
                <div><span>￥{{value.num!=0?value.price*value.num:value.price}}</span><span>{{value.oldPrice!==""?'￥'+value.oldPrice:""}}</span></div>
              </div>
              <div class="shuliang">
                <div v-if="value.num!=0" @click.stop="jian(ind,index)">-</div>
                <span v-if="value.num!=0">{{value.num}}</span>
                <div @click.stop="add(ind,index)">+</div>
              </div>
           </div>
         </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:"commod",
  data(){
    return {
      goods:[],
      kgs:[
        require("@/assets/img/decrease_1@2x.png"),
        require("@/assets/img/discount_1@2x.png"),
        require("@/assets/img/special_1@2x.png"),
        require("@/assets/img/invoice_1@2x.png"),
        require("@/assets/img/guarantee_1@2x.png")
      ],
      i:0
    }
  },
  methods:{
    add(ind,index){
      this.goods[ind].foods[index].num++
    },
    jian(ind,index){
      if(this.goods[ind].foods[index].num>0){
        this.goods[ind].foods[index].num--
      }
    },
    getGood(v){
      this.$router.push({
        path:"/good",
        query:{
          v
        }
      })
    }
  },
  created(){
    axios.get("/static/json/goods.json").then((res)=>{
      this.goods=res.data.data
    })
  }
}
</script>

<style>
.commod{
  display: flex;
  padding-bottom: 11rem;
}
.goodsList{
  flex:1;
  height: 87rem;
  overflow-y: scroll;
}
.commodNavBar{
  height: 87rem;
  overflow-y: scroll;
  width: 16rem;
  font-size: 2.4rem;
  background-color: #f3f5f7;
  /* color: rgb(240, 20, 20); */
  line-height: 2.8rem;
  font-weight: 200;
  flex-shrink: 0;
}
.commodNavBar > div{
  display: flex;
  align-items: center;
  height: 10.8rem;
  padding: 0 2.4rem;
}
.commodNavBar > div > div > img{
  width: 3rem;
  height: 2.7rem;
  float: left;
}
.goodsClass{
  display: flex;
  align-items: center;
  padding-left: 3.6rem;
  width: 59rem;
  height: 5rem;
  font-size: 2.4rem;
  font-weight: 200;
  background-color: #f3f5f7;
  border-left: 0.4rem solid #d9dde1;
}
.goodsByList{
  display: flex;
  padding: 3.6rem;
  border-bottom: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.goodsByList > img{
  width: 12rem;
  height: 12rem;
  border-radius: 1rem;
  margin-right: 2rem;
}
.goodsByListContent{
  flex:1;
}
.goodsByListContent > div:first-child{
  margin-top: 0.4rem;
  font-size: 2.8rem;
  color: rgb(7, 17, 27);
  line-height: 2.8rem;
}
.goodsByListContent > div:nth-child(2){
  margin-top: 1.6rem;
  font-size: 2rem;
  color: rgb(147, 153, 159);
  line-height: 2rem;
}
.goodsByListContent > div:nth-child(3){
  margin-top: 1.6rem;
  font-size: 2rem;
  color: rgb(147, 153, 159);
  line-height: 2rem;
}
.goodsByListContent > div:nth-child(4){
  margin-top: 1.6rem;
  font-size: 2.8rem;
  color: red;
  font-weight: 700;
  line-height: 4.8rem;
  line-height: 2rem;
}
.goodsByListContent > div:nth-child(4) > span:last-child{
  color: rgb(147, 153, 159);
  font-size: 2rem;
  text-decoration:line-through;
  margin-left: 1.6rem;
}
.shuliang{
  display: flex;
  align-items: flex-end;
}
.shuliang > span{
  margin: 0 2rem;
}
.shuliang div{
  width: 4rem;
  height: 4rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  background-color: blue;
  border-radius: 50%;
}
</style>