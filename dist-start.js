const fs = require('fs')
const path = require('path');
const express = require('express');
const httpPort = 3001;
const chalk = require("chalk");
const app = express();

console.log(chalk.green('\n打包完成啦^-^\n'))

app.use(express.static(path.resolve(__dirname,'./dist')))

// 自定义模板文件后缀名为html
app.engine('html', function(filePath, options, callback) {
    fs.readFile(filePath,'utf-8',function(err, content) {
        if (err) {
            return callback(new Error(err));
        } 
        var rendered = content.toString()
        return callback(null, rendered);
    })
});

app.set('views', path.join(path.resolve(__dirname,'./dist/')));
app.set('view engine', 'html');

app.get('*', function (req, res) {
    res.render('index.html')
})

app.listen(httpPort, () => {
    console.log(chalk.green(`服务器启动成功，正在监听 ${httpPort} 端口`))
})