<template>
  <div class="seniority-wrap">
    <van-tabs sticky
              :offset-top="45">
      <van-tab v-for="(item, index) in rankTitle"
               :key="index"
               :title="item.title">
        <rank-list :flag="item.order"></rank-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
      
<script>
import RankList from '@/components/rankList'
export default {
  name: 'rank-seniority',
  data() {
    return {
      rankTitle: [{ title: '季度排行榜', order: 0 }, { title: '总积分行榜', order: 1 }]
    }
  },
  methods: {},
  components: {
    RankList
  }
}
</script>

<style lang="scss" scoped>
.seniority-wrap {
  margin: $marginTop auto 0;
  width: 90%;
}
.rank-list {
  &-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(255, 255, 255);
    padding: 0.266667rem 0;
    border-bottom: 1px solid #ccc;
    &-header {
      background-color: rgba(0, 0, 0, 0.04);
    }
    &-num {
      box-sizing: border-box;
      width: 1.333333rem;
      text-align: center;
      margin-left: 0.346667rem;
      color: #ccc;
      font-size: 0.48rem;
      font-weight: $fontWeight;
    }
    &-username {
      flex: 1;
      padding-left: 0.266667rem;
      img {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 0.266667rem;
        vertical-align: middle;
      }
      span {
        font-size: 0.426667rem;
      }
    }
    &-fraction {
      box-sizing: border-box;
      margin-right: 0.533333rem;
      color: $mainColor;
      font-size: 0.426667rem;
      font-weight: $fontWeight;
    }
  }
}
</style>

<style>
.van-sticky--fixed {
  width: 90%;
  margin: 0 auto;
}
</style>
