var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url, true);
    var pathname = urlObj.pathname;
    var pathquery = urlObj.query;
    if (pathname === "/getInfo") {
        var count = pathquery.count;
        var page = pathquery.page;
        var data = fs.readFileSync("./data.json", "utf8");
        data = JSON.parse(data);
        var totalPage = Math.ceil(data.length / count);
        var ary = [];
        for (var i = (page - 1) * count; i <= page * count - 1; i++) {
            var cur = data[i];
            if (i > (data.length - 1)) {
                break;
            }
            ary.push(cur);
        }
        var res = {
            "totalPage": totalPage,
            "list": ary
        };
        response.writeHead(200, {'content-type': 'application/json'});
        response.end(JSON.stringify(res));
        return;
    }

    //->为了保证前端的页面和后台的接口在同一个源下,我们前端的页面也让后台来进行渲染
    if (pathname === "/my.html") {
        var con = fs.readFileSync("./my.html", "utf8");
        response.writeHead(200, {'content-type': 'text/html'});
        response.end(con);
        return;
    }

});
server.listen(8888);