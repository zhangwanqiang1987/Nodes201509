/*ʹ��NODE.js������ǰ��Ҫ���ķ�ҳЧ���ṩ�ӿڣ�ǰ�˸����ҵ�ǰÿһҳչʾ��������Ϣ���ڸ�����
* ��ǰ�ǵڼ�ҳ����̨����data.json�а���Ҫ�����ݷ��ظ�ǰ��
* 1���ṩһ�����ݻ�ȡ�Ľӿڡ�
* 2����ȡǰ�˴��ݸ���̨�Ĳ�����ÿҳ���������ݣ���ǰ�ǵڼ�ҳ
* 3����̨��data.json�аѶ��õ���Щ�����ݷ��ظ�ǰ�ˣ�ǰ�˽��ܵ����ݺ�ʵ�ְ󶨼���
* 4����̨���ø���ǰ��һ������ҳ
* */
var http=require("http");
var fs=require("fs");
var url=require("url");
var server =http.createServer(function(request,response){
    var urlObj=url.parse(request.url,true);//request.url��ȡǰ������ĵ�ַ url
});
server.listen(8080);