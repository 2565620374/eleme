<template>
  <div class="discuss">
      <div class="discussTop">
        <div>
          <div @click="i=0">全部 {{ratings.length}}</div>
          <div @click="i=1">满意 {{my}}</div>
          <div @click="i=2">不满意 {{bmy}}</div>
        </div>
        <div>
          <img src="" alt="">
          <div>只看有内容的评价</div>
        </div>
      </div>
      <div class="discussBottom">
        <div class="discussItem" v-for="(item) in ratings" :key="item.rateTime" v-show="show(item.score)">
            <div>
              <img :src="item.avatar" alt="">
              <div>
                <div>{{item.username}}</div>
                <div class="xing">
                  <img v-for="i in 5" :key="i" :src="star(i,item.score)" alt="">
                  <span>{{item.deliveryTime?item.deliveryTime+'分钟送达':""}}</span>
                </div>
              </div>
              <div>{{new Date(item.rateTime).toLocaleString()}}</div>
            </div>
            <div>
              {{item.text}}
            </div>
            <div class="plclass">
              <div v-for=" (val,ind) in item.recommend" :key="item.rateTime+ind">
                {{val}}
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:"discuss",
    data(){
      return {
        ratings:[],
        imgs:[
          require("@/assets/img/star36_on@2x.png"),
          require("@/assets/img/star36_half@2x.png"),
          require("@/assets/img/star36_off@2x.png")
        ],
        i:0
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
      show(v){
        if(this.i==0){
          return true
        }
        if(this.i==1){
          return v>=3
        }
        if(this.i==2){
          return v<3
        }
      }
    },
    computed:{
      my(){
        let l=this.ratings.filter((res)=>{
          return res.score>=3
        })
        return l.length
      },
      bmy(){
        let l=this.ratings.filter((res)=>{
          return res.score<3
        })
        return l.length
      }
    },
    created(){
      axios.get("/static/json/ratings.json").then((res)=>{
        this.ratings=res.data.data
      })
    }
}
</script>

<style>
.discussTop{
  padding: 0 3.6rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
}
.discussTop > div:first-child{
  padding: 3.6rem 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}
.discussTop > div:first-child > div{
  width: 10rem;
  height: 4rem;
  box-sizing: content-box;
  background: #00A0DC;
  font-size: 2.6rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

}
.discussTop > div:first-child > div:first-child{
  color: white;
}
.discussTop > div:first-child > div:nth-child(2){
  background: #CCECF8;
}
.discussTop > div:first-child > div:nth-child(3){
  background: #E9EBEC;
}
.discussTop > div:nth-child(2){
  display: flex;
  font-size: 2.6rem;
  color: #B7BBBF;
  padding: 3.6rem 0;
}
.discussBottom{
  padding: 0 3.6rem;
}
.discussItem{
  padding: 3.6rem 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
}
.discussItem > div:first-child{
  display: flex;
  justify-content: space-between;
}
.discussItem > div:nth-child(2){
  margin-top: 1.2rem;
  font-size: 2.4rem;
  color: rgb(7, 17, 27);
  line-height: 3.6rem;
  padding-left: 8rem;
}
.discussItem > div:first-child > img{
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  margin-right: 2.4rem;
}
.discussItem > div:first-child > div:nth-child(2){
  flex:1;
  flex-shrink: 0;
}
.discussItem > div:first-child > div:nth-child(3){
  font-size: 2rem;
  color: #B7BBBF;
}
.xing{
  display: flex;
  align-items: center;
}
.xing > img{
  width: 2.4rem;
  height: 2.4rem;
}
.xing > span{
  color: #B7BBBF;
  font-size: 1.6rem;
  margin-left: 1.2rem;
}
.plclass{
  margin-top: 1.6rem;
  display: flex;
  padding-left: 8rem;
}
.plclass > div{
  width: 13rem;
  height: 4rem;
  border: 0.1rem solid rgba(7, 17, 27, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.6rem;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>