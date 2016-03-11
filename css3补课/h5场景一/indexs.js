var main=document.querySelector("#main");
var oLis=document.querySelectorAll("#list>li");
var winW=document.documentElement.clientWidth;
var winH=document.documentElement.clientHeight;
var desW=640;
var desH=960;
if(winW/winH<desW/desH){
    main.style.webkitTransform="scale("+winH/desH+")";
}else{
    main.style.webkitTransform="scale("+winW/desW+")";
}
[].forEach.call(oLis,function(){
    var oLi=arguments[0];
    oLi.addEventListener("touchStart,start,false");
    oLi.addEventListener("touchMove,move,false");
    oLi.addEventListener("touchEnd,end,false");

});
function start(e){
    this.toucheStart= e.changedTouches[0].pageX;
}
function move(e){
    var touchMove= e.changedTouches[0].pageY;
    var pos=touchMove-this.toucheStart;
    var index=this.index;//当前这张的索引
    [].forEach.call(oLis,function(){
        arguments[0].className="";
    });
    if(pos>0){
        //往下滑获得上一张的索引
        this.prevsIndex=(index==0?oLis.length-1:index-1);
        var duration=-480+pos;
    }else if(pos<0){
        //往上滑获得下一张的索引
        this.prevsIndex=(index==oLis.length-1?0:index-1);
        var duration=480-
    }

    oLis[this.prevsIndex].style.transform="translate(0,"+duration+"px)";
    oLis[this.prevsIndex].className="zIndex";
}
function end(e){

}