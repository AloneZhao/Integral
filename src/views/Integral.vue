<template>
  <div class="home">
    <header-bar></header-bar>
    <home-bg :userPointObj="userPointObj"></home-bg>
    <div class="rank-category">
      <van-tabs>
        <van-tab title="积分明细">
          <rank-details></rank-details>
        </van-tab>
        <van-tab title="积分排行">
          <rank-seniority></rank-seniority>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@c/headerBar'
import HomeBg from '@c/homeBg'
import RankDetails from '@c/rankDetails'
import RankSeniority from '@c/rankSeniority'

import { getUserIntegral } from '@api/getIntegral'
export default {
  name: 'Home',
  data() {
    return {
      userPointObj: {
        quarterPoint: 0, // 季度总积分
        totalPoint: 0 // 累计总积分
      }
    }
  },
  methods: {
    // 获取用户的季度积分与总积分
    getIntegral(id) {
      getUserIntegral(id)
        .then(res => {
          this.userPointObj.totalPoint = parseFloat(res.data.userPointObj.totalPoint)
          this.userPointObj.quarterPoint = parseFloat(res.data.userPointObj.quarterPoint)
        })
        .catch(err => {
          console.log(err)
          this.$toast('获取数据失败')
        })
    }
  },
  components: {
    HeaderBar,
    HomeBg,
    RankDetails,
    RankSeniority
  },
  mounted() {
    console.log('路由地址', this.$route);
    let userId = this.$route.query.userId
    this.getIntegral(userId)
  }
}
</script>

<style lang="scss" scoped>
.rank-category {
  margin-top: $marginTop;
}
</style>

