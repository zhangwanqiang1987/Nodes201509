////1.����JSģ��
//var fs=require("fs");
////make directory ����Ŀ¼
//fs.mkdir('a/b/c');//�����и�Ŀ¼���ڲſɴ���cĿ¼����a������bҲ�ô���

//1.�ȿ���������ǲ���node����
//2.�������NODE�����ģ�ȥnode_modules��������û������ļ���
var mkdirp = require('mkdirp');

mkdirp('/a/b/c', function (err) {
    if (err) console.error(err);
    else console.log('pow!')
});
