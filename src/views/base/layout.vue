<template>
  <div class="layout">
    <div class="layout_left">
      左侧
    </div>
    <div class="layout_right">
      <div class="layout__header">
        <div></div>
        <div></div>
      </div>
      <div class="layout__content">
        容器内容
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang='scss' scoped>
$header_height: 64px;
.layout{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap; // 不拆行
  .layout_left{
    background: #000c17;
    width: 180px;
    height: 100%;
  }
  .layout_right{
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column; // 改变方向
    flex-wrap: nowrap;
    justify-content: flex-start;
    .layout__header{
      height: $header_height;
    }
  }
}
</style>