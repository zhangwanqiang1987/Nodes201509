/*使用NODE.js技术给前端要做的分页效果提供接口，前端告诉我当前每一页展示多少条信息，在告诉我
* 当前是第几页，后台就在data.json中把需要的数据返回给前端
* 1）提供一个数据获取的接口。
* 2）获取前端传递给后台的参数：每页多少条数据，当前是第几页
* 3）后台导data.json中把对用的那些条数据返回给前端，前端接受到数据后实现绑定即可
* 4）后台还得告诉前端一共多少页
* */
var http=require("http");
var fs=require("fs");
var url=require("url");
var server =http.createServer(function(request,response){
    var urlObj=url.parse(request.url,true);//request.url获取前端请求的地址 url
});
server.listen(8080);