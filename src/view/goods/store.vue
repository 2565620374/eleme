<template>
  <div class="store">
      <!-- 商家数据 -->
      <div class="sjsj">
        <div class="sjsjTop">
          <div>
            <div>{{goods.name}}</div>
            <div>
              <img v-for="i in 5" :key="i" :src="star(i,goods.score)" alt="">
              <span>(661)</span>
              <span>月售690单</span>
            </div>
          </div>
          <div>
            <img @click="cli" :src="aximg[i]" alt="">
            <div v-if="i==0">收藏</div>
            <div v-if="i==1">已收藏</div>
          </div>
        </div>
        <div class="sjsjBottom">
          <div>
            <div>起送价</div>
            <div>{{goods.minPrice}}<span>元</span></div>
          </div>
          <div>
            <div>商家配送</div>
            <div>{{goods.deliveryPrice}}<span>元</span></div>
          </div>
          <div>
            <div>平均配送时间</div>
            <div>{{goods.deliveryTime}}<span>分钟</span></div>
          </div>
        </div>
      </div>
      <!-- 公告与活动 -->
      <div class="gghd">
        <div>公告与活动</div>
        <div>{{goods.bulletin}}</div>
        <ul class="hds">
          <li v-for="(item,index) in goods.supports" :key="index">
            <img :src="kgs[index]" alt="">
            <span>{{item.description}}</span>
          </li>
        </ul>
      </div>
      <!-- 商家实景 -->
      <div class="sjjing">
        <div>商家实景</div>
        <div>
          <img v-for="(item,ind) in goods.pics" :key="ind+15" :src="item" alt="">
        </div>
      </div>
      <!-- 商家信息 -->
      <div class="sjxx">
        <div>商家信息</div>
        <ul class="xx">
          <li v-for="(item,index) in goods.infos" :key="index+100">
            {{item}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:"store",
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
      imgs:[
        require("@/assets/img/star36_on@2x.png"),
        require("@/assets/img/star36_half@2x.png"),
        require("@/assets/img/star36_off@2x.png")
      ],
      aximg:[
        require("@/assets/img/ax.png"),
        require("@/assets/img/ax-active.png")
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
      cli(){
        if(this.i==0){
          this.i++
        }else{
          this.i--
        }
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
.store{
  height: 87rem;
  overflow-y: scroll;
}
.sjsj{
  padding: 0 3.6rem;
  border-bottom: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.sjsjTop{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.sjsjTop > div:first-child{
  padding: 3.6rem 0;
}
.sjsjTop > div:last-child{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sjsjTop > div:last-child > img{
  width: 4.8rem;
  height: 4.8rem;
}
.sjsjTop > div:first-child > div:first-child{
  font-size: 2.8rem;
  color: rgb(7, 17, 27);
  line-height: 2.8rem;
}
.sjsjTop > div:first-child > div:last-child{
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
}
.sjsjTop > div:first-child > div:last-child > img{
  width: 3.6rem;
  height: 3.6rem;
  margin-right: 1rem;
}
.sjsjTop > div:first-child > div:last-child > span{
  font-size: 2rem;
  color: rgb(77, 85, 93);
  line-height: 3.6rem;
  margin-right: 2.4rem;
}
.sjsjBottom{
  display: flex;
}
.sjsjBottom > div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3.6rem 0;
  flex:1;
  font-size: 2rem;
  color: rgb(147, 153, 159);
  line-height: 2rem;
}
.sjsjBottom > div > div:last-child{
  font-size: 4.8rem;
  font-weight: 200;
  color: rgb(7, 17, 27);
  line-height: 4.8rem;
  margin-top: 0.8rem;
}
.sjsjBottom > div > div:last-child > span{
  font-size: 2rem;
  font-weight: 200;
}
.sjsjBottom > div:first-child{
  border-right: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.sjsjBottom > div:nth-child(2){
  border-right: 0.1rem solid rgba(7, 17, 27, 0.1);
}

/* 公告与活动 */
.gghd > div:first-child{
  font-size: 2.8rem;
  color: rgb(7, 17, 27);
  line-height: 2.8rem;
  padding-top: 3.6rem;
  padding-left: 3.6rem;
}
.gghd > div:nth-child(2){
  font-size: 2.4rem;
  color: rgb(240, 20, 20);
  line-height: 4.8rem;
  font-weight: 200;
  margin-top: 1.6rem;
  padding: 0 6rem;
}
.hds{
  padding: 0 3.6rem;
  margin-top: 3.2rem;
}
.hds > li{
  padding: 3.2rem 2.4rem;
  font-size: 2.4rem;
  color: rgb(7, 17, 27);
  line-height: 3.2rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  border-top: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.hds > li > img{
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 1rem;
}

/* 商家实景 */
.sjjing{
  padding: 3.6rem 0 3.6rem 3.6rem;
  border-top: 0.1rem solid rgba(7, 17, 27, 0.1);
  border-bottom: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.sjjing > div:first-child{
  font-size: 2.8rem;
  color: rgb(7, 17, 27);
  line-height: 2.8rem;
}
.sjjing > div:last-child{
  display: flex;
  overflow-x: scroll;
  margin-top: 2.4rem;
}
.sjjing > div:last-child > img{
  width: 24rem;
  height: 18rem;
}

/* 商家信息 */
.sjxx{
  padding: 3.6rem 3.6rem 0rem 3.6rem;
}
.sjxx > div:first-child{
  font-size: 2.8rem;
  color: rgb(7, 17, 27);
  line-height: 2.8rem;
}
.xx{
  margin-top: 2.4rem;
}
.xx > li{
  padding: 3.2rem 2.4rem;
  font-size: 2.4rem;
  color: rgb(7, 17, 27);
  line-height: 3.2rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  border-top: 0.1rem solid rgba(7, 17, 27, 0.1);
}
</style>