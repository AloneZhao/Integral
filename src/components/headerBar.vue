<template>
  <div class="header-bar">
    <van-nav-bar title="我的积分"
                 fixed
                 placeholder
                 z-index="999"
                 @click-left="goBack">
      <template #left>
        <van-icon name="cross"
                  size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  methods: {
    goBack() {
      history.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar .van-icon {
  color: #323232;
  font-weight: $fontWeight;
}
</style>