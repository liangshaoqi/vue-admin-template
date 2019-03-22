<template>
  <div>
    数据概览页面
  </div>
</template>

<script>
import { getPlatform } from 'api/survey'
export default {
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getPlatform().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>