<template>
  <div class="content">
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多内容了"
              @load="onLoad">
      <van-cell center
                v-for="(item, index) in rankDetails"
                :key="index"
                :title="item.briefDescription"
                :value="item.point"
                :label="item.date"
                size="large" />
    </van-list>

  </div>
</template>

<script>
import { getUserIntegralSource } from '@api/getIntegral'
export default {
  name: 'rank-details',
  data() {
    return {
      rankDetails: [], // 积分来源情况
      loading: false,
      finished: false,
      current: 1,
      total: 0 // 每日总分计算
    }
  },
  methods: {
    // 获取用户积分来源详情
    getUserInfo(id) {
      let params = {
        current: this.current,
        size: 10,
        id
      }
      getUserIntegralSource(params)
        .then(res => {
          let { records } = res.data
          let data = records.map(item => {
            this.total += parseFloat(item.point)
            item.date = item.date.split(' ')[0]
            item.point = parseFloat(item.point)
            return { ...item }
          })
          this.$store.commit('totalPoin', this.total)
          this.rankDetails.push(...data)
          this.loading = false
          if (records.length < 10) {
            this.finished = true
          } else {
            this.current++
          }
        })
        .catch(err => {
          console.log('err', err)
          this.$toast('获取数据失败')
        })
    },
    onLoad() {
      this.getUserInfo(this.$route.query.userId)
    }
  }
}
</script>

<style lang="scss" scoped>
.van-cell__value {
  color: $mainColor;
  span {
    font-weight: $fontWeight;
    font-size: 0.48rem;
  }
}
</style>