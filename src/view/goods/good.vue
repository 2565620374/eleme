<template>
  <div class="good">
      <img :src="good.icon" alt="">
      <!-- 商品信息 -->
      <div class="goodByList">
        <div class="goodByListTop">
          <div>{{good.name}}</div>
          <div>月售1132份 好评率{{good.rating}}%</div>
        </div>
        <div class="goodByListBottom">
          <div>
            <span>￥{{good.price}}</span>
            <span>{{good.oldPrice?'￥'+good.oldPrice:""}}</span>
          </div>
          <div>加入购物车</div>
        </div>
      </div>

      <!-- 商家介绍 -->
      <div class="goodgghd">
        <div>商家介绍</div>
        <div>{{good.info}}</div>
      </div>

      <!-- 商品评价 -->
      <div>
        <div class="discussTops">
          <div>
            <div @click="i=0">全部 {{good.ratings.length}}</div>
            <div @click="i=1">推荐 {{my}}</div>
            <div @click="i=2">吐槽 {{bmy}}</div>
          </div>
          <div>
            <img src="" alt="">
            <div>只看有内容的评价</div>
          </div>
        </div>
        <div class="discussBottoms">
          <div class="discussItems" v-for="(item) in good.ratings" :key="item.rateTime" v-show="show(item.rateType)">
              <div>
                <div>{{new Date(item.rateTime).toLocaleString()}}</div>
                <div>
                  <div>{{item.username}}</div>
                  <img :src="item.avatar" alt="">
                </div>
              </div>
              <div>
                {{item.text}}
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"good",
    data(){
      return {
        good:{},
        i:0
      }
    },
    methods:{
      show(v){
        if(this.i==0){
          return true
        }
        if(this.i==1){
          return v==0
        }
        if(this.i==2){
          return v==1
        }
      }
    },
    computed:{
      my(){
        let l=this.good.ratings.filter((res)=>{
          return res.rateType==0
        })
        return l.length
      },
      bmy(){
        let l=this.good.ratings.filter((res)=>{
          return res.rateType==1
        })
        return l.length
      }
    },
    created(){
      this.good=this.$route.query.v
    }
}
</script>

<style>
.good > img{
  display: block;
  width: 75rem;
  height: 75rem;
}

/* 商品信息 */
.goodByList{
  padding: 3.6rem;
}
.goodByListTop > div:first-child{
  font-size: 2.8rem;
  font-weight: 700;
  color: rgb(7, 17, 27);
  line-height: 2.8rem;
}
.goodByListTop > div:last-child{
  font-size: 2rem;
  color: rgb(147, 153, 159);
  line-height: 2rem;
  margin-top: 1.6rem;
}
.goodByListBottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.6rem;
}
.goodByListBottom > div:nth-child(1){
  margin-top: 1.6rem;
  font-size: 2.8rem;
  color: red;
  font-weight: 700;
  line-height: 4.8rem;
  line-height: 2rem;
}
.goodByListBottom > div:nth-child(1) > span:last-child{
  color: rgb(147, 153, 159);
  font-size: 2rem;
  text-decoration:line-through;
  margin-left: 1.6rem;
}
.goodByListBottom > div:nth-child(2){
  width: 14.8rem;
  height: 4.8rem;
  border-radius: 2.4rem;
  background: rgb(0,160,220);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

/* 商家介绍 */
.goodgghd{
  padding: 3.6rem;
  border-top: 0.1rem solid rgba(0, 0, 0,0.1);
  border-bottom: 0.1rem solid rgba(0, 0, 0,0.1);
}
.goodgghd > div:first-child{
  font-size: 2.8rem;
  color: rgb(7, 17, 27);
  line-height: 2.8rem;
}
.goodgghd > div:nth-child(2){
  font-size: 2.4rem;
  color: rgb(77, 85, 93);
  line-height: 4.8rem;
  font-weight: 200;
  margin-top: 1.2rem;
  padding: 0 1.6rem;
}

/* 商品评价 */
.discussTops{
  padding: 0 3.6rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
}
.discussTops > div:first-child{
  padding: 3.6rem 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}
.discussTops > div:first-child > div{
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
.discussTops > div:first-child > div:first-child{
  color: white;
}
.discussTops > div:first-child > div:nth-child(2){
  background: #CCECF8;
}
.discussTops > div:first-child > div:nth-child(3){
  background: #E9EBEC;
}
.discussTops > div:nth-child(2){
  display: flex;
  font-size: 2.6rem;
  color: #B7BBBF;
  padding: 3.6rem 0;
}
.discussBottoms{
  padding: 0 3.6rem;
}
.discussItems{
  padding: 3.6rem 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
}
.discussItems > div:first-child{
  display: flex;
  justify-content: space-between;
}
.discussItems > div:nth-child(2){
  margin-top: 1.2rem;
  font-size: 2.4rem;
  color: rgb(7, 17, 27);
  line-height: 3.6rem;
  /* padding-left: 8rem; */
}
.discussItems > div:first-child > div:nth-child(2){
  display: flex;
}
.discussItems > div:first-child > div:nth-child(2) > img{
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  margin-left: 1.2rem;
}
.discussItems > div:first-child > div:nth-child(3){
  font-size: 2rem;
  color: #B7BBBF;
}
</style>