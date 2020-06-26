<template>
  <div class="wrap">
    <!-- 外层 -->
    <div class="list">
      <div class="list_child">
        <div class="list_child_child"></div>
      </div>
    </div>

    <!-- 内层 -->
    <div class="list second">
      <div class="list_child">
        <div class="list_child_child"></div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "hexagon"
}
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  transform: rotate(30deg);
}
.list {
  width: 3.733333rem;
  height: 2.666667rem;
  overflow: hidden;
  transform: rotate(120deg);
}

.list_child {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: rotate(-60deg);
}

.list_child_child {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: rotate(-60deg);
  background: $mainColor;
}
.second {
  position: absolute;
  top: 3px;
  left: 1px;
  width: 3.67rem;
  height: 2.513333rem;
}
.second .list_child_child {
  background: rgb(255, 255, 255);
}
</style>