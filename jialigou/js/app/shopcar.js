/**
 * Created by Administrator on 2017/1/16.
 */
$(function(){
    loadcar();
})
//加载购物车
function loadcar(){
    /*getCookie(_sxjson.gid);
    console.log(_sxjson.gid);*/
    var _json = decodeURIComponent(document.cookie);
    console.log(_json);
    var _jsonArr = _json.split("=");
    console.log(_jsonArr);
    var _tar = JSON.parse(_jsonArr[1]);
    console.log(_tar);
    var $tr1 = $("<tr>");
    //图片
    var $td1 = $("<td>");
    var $sximg = $("<img>");
    $sximg.attr("src",_tar.xspic);
    $sximg.css("width","80px");
    console.log(_tar.xspic);
    $td1.append($sximg);
    $tr1.append($td1);
    //名称
    var $td2 = $("<td>");
    $td2.text(_tar.mingcheng);
    console.log(_tar.mingcheng)
    $tr1.append($td2);
    $(".carlist").append($tr1);
    //单价
    var $td3 = $("<td>");
    $td3.text(_tar.xsjia);
    console.log(_tar.xsjia)
    $tr1.append($td3);
    $(".carlist").append($tr1);
    //数量
    var $td4 = $("<td>");
    $td4.text(_tar.xscount);
    console.log(_tar.xscount)
    $tr1.append($td4);
    $(".carlist").append($tr1);
    //单价
    var $td5 = $("<td>");
    $td5.text(_tar.xsjia);
    console.log(_tar.xsjia)
    $tr1.append($td5);
    $(".carlist").append($tr1);
}