//fs��NODE�����ģ����ڶ�д�ļ���ģ��
//require����ŵ���NODE��ģ�������

var fs=require('fs');//node�ĺ���ģ��,û·��
//ͬ����ȡ�ļ������ݣ�ͨ������ֵ����,
//��һ�������Ƕ�ȡ���ļ����ļ�·�����ڶ��������Ǵ��ļ��ı�������
var content=fs.readFileSync('./readme.txt','utf8');
console.log(content);
console.log('b');
