<template>
  <div>
    账号:<el-input v-model="loginName"></el-input>
    密码:<el-input v-model="password" type='password'></el-input>
    <el-button @click="login">登录</el-button>
    <el-button @click="getPlatform">获取数据</el-button>
  </div>
</template>

<script>
import { login } from 'api/base'
import { session_set } from 'utils'
import md5 from 'md5'
export default {
  data() {
    return {
      loginName: '',
      password: ''
    }
  },
  mounted() {
    // console.log('欢迎到登录页')
  },
  methods: {
    login() {
      let data = {
        loginName: this.loginName,
        password: md5(this.password)
      }
      login(data).then((res) => {
        session_set('token', res.result.adoptToken)
      })
    },
    getPlatform() {
    }
  }
}
</script>

<style lang='scss' scoped>
</style>