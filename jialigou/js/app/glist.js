/**
 * Created by Administrator on 2017/1/14.
 */
$(function(){
    $(".good-subnav").on("click",function(){
        console.log(this);
        $(this.nextElementSibling).toggle();
    });
    var _egstr = [
        {eatgid:1,src:"../images/sp1.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp2.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp3.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp4.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp5.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp6.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp7.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp8.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp9.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp10.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp11.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp12.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp13.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp14.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp15.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"},
        {eatgid:1,src:"../images/sp16.jpg",intro:"周家庄五谷蔬果速食营养粥特惠组",gprice:"￥199.00",xcount:"已售出1570件"}
    ];
    loadeategoods(_egstr);
    function loadeategoods(data){
        for(var i = 0;i<data.length;i++){
            console.log(data);
            console.log(data.length);
            //图片插入
            var $img = $("<img>");
            $img.attr("src",_egstr[i].src);
            var $aimg = $("<a>");
            $aimg.attr("href","goodsdetial.html");
            $aimg.append($img);
            $(".good-piclist>li").eq(i).append($aimg);
            //介绍插入
            var $intro = $("<a>");
            $intro.attr("href","goodsdetial.html");
            $intro.text(_egstr[i].intro);
            $intro.addClass("pintroduce");
            $(".good-piclist>li").eq(i).append($intro);
            //价格销量插入
            var $gprice = $("<strong>");
            var $gcount = $("<span>");
            var $p_gprice = $("<p>");
            $gprice.text(_egstr[i].gprice);
            $gcount.text(_egstr[i].xcount);
            $p_gprice.append($gprice);
            $p_gprice.append($gcount);
            $p_gprice.addClass("pxinxi");
            $(".good-piclist>li").eq(i).append($p_gprice);
            //加入购物车
            var $goubtn = $("<button>");
            $goubtn.text("加入购物车");
            $goubtn.addClass("goubtn");
            var $pbtn = $("<p>");
            var $shoubtn = $("<button>");
            $shoubtn.text("收藏");
            $shoubtn.addClass("shoubtn");
            $pbtn.append($goubtn).append($shoubtn);
            $(".good-piclist>li").eq(i).append($pbtn);
        }
    }
})