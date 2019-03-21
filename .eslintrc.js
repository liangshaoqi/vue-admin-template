module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "camelcase":0,
    "no-extend-native":0,
    "eol-last":0,
    "no-undef":0,
    "no-console": 1, // 使用console.log警告
    "no-debugger": 1, // 使用debugger警告
    "space-before-function-paren": 0, // 函数定义时括号前面要不要有空格
    "comma-dangle": [2, "never"], // 对象字面量项尾不能有逗号
    "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    "no-dupe-args": 2, // 函数参数不能重复
    "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-empty-character-class": 2, // 正则表达式中的[]内容不能为空
    "no-invalid-regexp": 2, // 禁止无效的正则表达式
    "no-func-assign": 2, // 禁止重复的函数声明
    "valid-typeof": 2,  // 必须使用合法的typeof的值
    "no-unreachable": 2, // 不能有无法执行的代码
    "no-unexpected-multiline": 2, // 避免多行表达式
    "no-sparse-arrays": 2, // 禁止稀疏数组， [1,,2]
    "no-else-return": 1, // 如果if语句里面有return,后面不能跟else语句
    "no-multi-spaces": 1, // 不能用多余的空格
    "key-spacing": [1, {  // 对象字面量中冒号的前后空格
      "beforeColon": false,
      "afterColon": true
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}