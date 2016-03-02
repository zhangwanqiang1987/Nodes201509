////1.引入JS模块
//var fs=require("fs");
////make directory 创建目录
//fs.mkdir('a/b/c');//必须有父目录存在才可创建c目录光有a还不行b也得存在

//1.先看这个名字是不是node亲生
//2.如果不是NODE亲生的，去node_modules下面找有没有这个文件夹
var mkdirp = require('mkdirp');

mkdirp('/a/b/c', function (err) {
    if (err) console.error(err);
    else console.log('pow!')
});
