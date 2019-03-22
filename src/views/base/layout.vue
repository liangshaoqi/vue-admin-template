<template>
  <div class="layout">
    <!-- 菜单 -->
    <div class="layout_left">
      <Menu ref="menu"></Menu>
    </div>
    <!-- 右侧内容 -->
    <div class="layout_right">
      <!-- 头部 -->
      <div class="layout__header">
        <div class="shrink">
          <!-- <i class="iconfont icon-shousuo" @click="menuSwitch"></i> -->
        </div>
        <div class="layout__header-name">
          <span class="layout__username">用户名</span>
          <span><i class="el-icon-caret-bottom"></i></span>
        </div>
      </div>
      <!-- 容器 -->
      <div class="layout__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './menu'
export default {
  components: {
    Menu
  },
  data() {
    return {}
  },
  methods: {
    // 菜单开关
    menuSwitch() {
      this.$refs['menu'].menuSwitch()
    }
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
    // background: #000c17;
    width: 180px;
    height: 100%;
    overflow: hidden;
  }
  .layout_right{
    flex: 1;
    overflow: auto;
    display: flex;
    height: 100%;
    flex-direction: column; // 改变方向
    flex-wrap: nowrap;
    justify-content: flex-start;
    .layout__header{
      height: $header_height;
      display: flex;
      justify-content: space-between;
      .shrink{
        @include flex-vertical-center();
      }
      .layout__header-name{
        @include flex-vertical-center();
      }
    }
    .layout__content{
      background: rgb(240, 242, 245);
      flex: 1;
      overflow: auto;
    }
  }
}
</style>