<template>
  <div class="rank-header">

    <div class="rank-header-left">
      <div class="fraction">210</div>
      <div>今日获得积分</div>
    </div>

    <div class="rank-header-mid">
      <div class="rank-count">
        <div>
          <p class="rank-count-num">{{userPointObj.totalPoint}}</p>
          <p class="drs">我的总积分</p>
        </div>
      </div>
      <hexagon></hexagon>
    </div>

    <div class="rank-header-right">
      <div class="fraction">{{userPointObj.quarterPoint}}</div>
      <div>季度总积分</div>
    </div>

  </div>
</template>

<script>
import Hexagon from '@c/hexagon'
export default {
  name: "homeBg",
  components: {
    Hexagon
  },
  props: {
    userPointObj: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="scss" scoped>
.rank-header {
  display: flex;
  align-items: center;
  height: 4.266667rem;
  background: url('../assets/imgs/userbg.png') no-repeat center;
  background-size: 100% 100%;
  &-mid {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    .rank-count {
      div {
        width: 100%;
        text-align: center;
        line-height: 0.8rem;
        .rank-count-num {
          font-size: 0.8rem;
          font-weight: 900;
          color: $mainColor;
        }
        .drs {
          color: $mainColor;
        }
      }
      display: flex;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
  &-left,
  &-right {
    width: 2.666667rem;
    line-height: 1.066667rem;
    text-align: center;
    color: rgb(255, 255, 255);
    .fraction {
      font-size: 0.8rem;
    }
  }
}
</style>