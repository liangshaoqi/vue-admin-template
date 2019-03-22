<template>
  <el-menu
    class="menu_content"
    :collapse="isCollapse"
    background-color="#000C17"
    text-color="#fff"
    active-text-color="#fff"
    router
  >
    <div v-for="(item, key, index) in menuList">
      <!-- 二级菜单类型 -->
      <el-submenu
        v-if="item.children && item.children.length > 0"
        :key="item.path"
        :index="item.path"
      >
        <!-- title插槽 -->
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <!-- 下级菜单 -->
        <el-menu-item-group>
          <el-menu-item
            v-for="(c_item, c_key, c_index) in item.children"
            :index="c_item.path"
            :key="c_item.path"
          >{{c_item.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 一级菜单 -->
      <el-menu-item :key="item.path" :index="item.path" v-else>
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>
<script>
import menuList from "./menuMock.js";
export default {
  data() {
    return {
      menuList,
      isCollapse: false
    };
  },
  methods: {
    // 开关
    menuSwitch() {
      this.isCollapse = !this.isCollapse;
    },
    handleClose() {}
  }
};
</script>

<style lang='scss'>
// 设置菜单100%
.menu_content {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>