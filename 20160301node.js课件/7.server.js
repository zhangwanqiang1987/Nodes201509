//����node.js�ṩ�ĺ���ģ��
var http=require("http");
//���������� localhost
//request ��Ͳ ����޻��̵����󣬿��Ի�ȡ�ͻ��˵�������Ϣ
//response ��Ͳ ����ͻ��˵���Ӧ ��������Ӧ��д������

var server=http.createServer();
var fs=require('fs');
server.on('request',function (request,response){
    var content=fs.readFileSync('./index.html','utf8');
    response.write(content);//д����Ӧ

    response.end();//�ҵ��绰
});
//�ڱ��ؼ���8080�˿�
 server.listen(9090);