//加载node.js提供的核心模块
var http=require("http");
//创建服务器 localhost
//request 听筒 代表哭护短的请求，可以获取客户端的请求信息
//response 话筒 代表客户端的响应 可以向响应里写如内容

var server=http.createServer();
var fs=require('fs');
server.on('request',function (request,response){
    var content=fs.readFileSync('./index.html','utf8');
    response.write(content);//写入响应

    response.end();//挂掉电话
});
//在本地监听8080端口
 server.listen(9090);