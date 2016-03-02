//fs是NODE亲生的，用于读写文件的模块
//require里面放的是NODE的模块的名字

var fs=require('fs');//node的核心模块,没路径
//同步读取文件的内容，通过返回值接收,
//第一个参数是读取的文件的文件路径，第二个参数是此文件的编码类型
var content=fs.readFileSync('./readme.txt','utf8');
console.log(content);
console.log('b');
