<template>
  <div class="rank-list-container">
    <div class="rank-list">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多内容了"
                @load="onLoad">
        <div class="rank-list-data"
             v-for="(item,index) in quarterList"
             :key="index">
          <div class="rank-list-data-num">{{ item.rank }}</div>
          <div class="rank-list-data-username">
            <img :src="item.avatarUrl">
            <span>{{ item.userName }}</span>
          </div>
          <div class="rank-list-data-fraction">
            {{ flag === 0 ? parseFloat(item.quarterPoint) : parseFloat(item.totalPoint)}}
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { getUserRank } from '@api/getIntegral'
export default {
  name: 'rank-list',
  data() {
    return {
      quarterList: [],
      loading: false,
      finished: false,
      current: 1
    }
  },
  methods: {
    getRank(id) {
      let params = {
        current: this.current,
        size: 10,
        order: this.flag
      }
      getUserRank(params, id)
        .then(res => {
          const { records } = res.data // 获取每个用户相关的积分信息
          this.quarterList.push(...records)
          this.loading = false // 改变加载状态
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
      this.getRank(this.$route.query.userId)
    }
  },
  props: {
    flag: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.rank-list-container {
  .rank-list-data:first-child {
    background: rgba(0, 0, 0, 0.04);
  }
  .rank-list-data {
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