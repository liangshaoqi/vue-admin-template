import environment from './environment_config'
let main_url = null // 主地址(刘吉)
let answer_url = null // 问答地址(舒子栋)
let inform_url = null // 举报地址(舒子栋)
let sdkChat_url = null // 举报消息查询地址(sdk提供)
switch(environment) {
  case 'prod': // 正式
    main_url = 'https://analysis-restful.spap.com'
    answer_url = 'https://spap-help.spap.com'
    inform_url = 'https://restful.spap.com/s50'
    sdkChat_url = 'https://aws-supporter-engine.spap.com'
    break
  case 'test': // 测试
    main_url = 'http://47.104.74.197:9995'
    answer_url = 'http://125.208.1.66:10950'
    inform_url = 'http://125.208.1.66:10021/s50'
    sdkChat_url = 'https://dev.supporter.shixincube.cn'
    break
  case 'dev': // 开发
    main_url = 'http://47.104.74.197:9995'
    answer_url = 'http://125.208.1.66:10950'
    inform_url = 'http://125.208.1.66:10021/s50'
    sdkChat_url = 'https://dev.supporter.shixincube.cn'
    break
  default: // 默认为开发
    main_url = 'http://47.104.74.197:9995'
    answer_url = 'http://125.208.1.66:10950'
    inform_url = 'http://125.208.1.66:10021/s50'
    sdkChat_url = 'https://dev.supporter.shixincube.cn'
}
export default {
  main_url,
  answer_url,
  inform_url,
  sdkChat_url
}