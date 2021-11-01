<template>
  <div class="gwcContent" v-if="$store.state.count==1">
      <div class="gwcsItem">
          <div class="gwcsItemTop">
              <div>购物车</div>
              <div>清空</div>
          </div>
          <div class="gwcsItemBottom">
              <div class="gwcsItemBottomItem">
                  <div>莲子核桃黑米粥</div>
                  <div class="sl">
                      <div>￥10</div>
                      <div>-</div>
                      <div>0</div>
                      <div>+</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"gwcContent"
}
</script>

<style>
.gwcContent{
    background: rgba(7, 17, 27, 0.6);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 10.2rem;
}
.gwcsItem{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 61.1rem;
    background: white;
}
.gwcsItemTop{
    height: 8rem;
    background: #f3f5f7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3.6rem;
    border-bottom: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.gwcsItemTop > div:first-child{
    font-size: 2.8rem;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 8rem;
}
.gwcsItemTop > div:last-child{
    font-size: 2.4rem;
    color: rgb(0, 160, 220);
    line-height: 8rem;
}
.gwcsItemBottom{
    padding: 0 3.6rem;
}
.gwcsItemBottomItem{
    display: flex;
    height: 9.6rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1rem solid rgba(7, 17, 27, 0.1);
}
.gwcsItemBottomItem > div:first-child{
    font-size: 2.8rem;
    color: rgb(7, 17, 27);
    line-height: 4.8rem;
}
.sl{
    display: flex;
}
.sl > div:nth-child(1){
    margin-right: 2.4rem;
    font-size: 2.8rem;
    color: rgb(240, 20, 20);
    font-weight: 700;
    line-height: 4.8rem;
}
.sl > div:nth-child(2),.sl > div:nth-child(4){
  width: 4rem;
  height: 4rem;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  background-color: rgb(0, 160, 220);
  border-radius: 50%;
}
.sl > div:nth-child(3){
    margin: 0 2rem;
    font-size: 2rem;
    color: rgb(147, 153, 159);
    line-height: 4.8rem;
}
</style>