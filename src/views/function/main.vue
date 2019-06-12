<template>
  <div>
    功能统计页面
  </div>
</template>

<script>
import { getchart } from 'api/function'
export default {
  mounted() {
    this.getchart()
  },
  methods: {
    getchart() {
      let data = {
        startDate: '2019-03-21',
        stopDate: '2019-03-21',
        platformId: -1
      }
      getchart(data).then((res) => {
        // console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>