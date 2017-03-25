/**
 * Created by Administrator on 2017/1/6.
 */
$(function(){
    var index = 0;
    var timer = null;
    timer = setInterval(show,2000);
    function show(){
        if(index==5){
            index=0;
        }
        $(".banpic>li").eq(index).animate({opacity:1}).siblings().animate({opacity:0});
        $(".ball span").eq(index).addClass("active").siblings().removeClass();
        index++;
    }
    $(".ball span").hover(enter,out);
    function enter(){
        clearInterval(timer);
        index = $(this).index();
        show();
    }
    function out(){
        clearInterval(timer);
        timer = setInterval(show,2000);
    }
    //banner部分的选项卡
    $("#sortlist>li").hover(function(){
        $(this).find('.detail-sort').css({"display":"block"}).end().siblings().find('.detail-sort').css({"display":"none"});
    },function(){
        $(this).find('.detail-sort').css({"display":"none"})
    });
    //直播时间
    var sertime;
    sertime = setInterval(function(){
        var ztime1 = new Date();
        var shi = ztime1.getHours();
        var minu = ztime1.getMinutes();
        var sec = ztime1.getSeconds();
        $(".zhitime").text(`${shi}:${minu}:${sec}`);
    },1000);


    //今日热播昨日热播
    $(".rebolist li").click(function(){
        $(".list-lun").eq($(this).index()).css({"opacity":"1"}).siblings().css({"opacity":"0"});
    });
    //json加载今日热播
    var _arrjin = [{
        "jinid":"1",
        "addtime":"[20:00-20:45]",
        "src":"../images/jin1.jpg",
        "jinintro":"贵州茅台集团15特卖惊爆组",
        "jinprice":"￥1345"
    },
        {
            "jinid":"2",
            "addtime":"[20:46-21:05]",
            "src":"../images/jin2.jpg",
            "jinintro":"贵州茅台集团原浆酒15特卖组",
            "jinprice":"￥345"
        },
        {
            "jinid":"3",
            "addtime":"[21:05-21:45]",
            "src":"../images/jin3.jpg",
            "jinintro":"五粮液股份纳福迎祥年末回馈组",
            "jinprice":"￥745"},
        {
            "jinid":"4",
            "addtime":"[21:46-22:05]",
            "src":"../images/4.jpg",
            "jinintro":"贵州茅台集团原浆酒15特卖组",
            "jinprice":"￥1345"},
        {
            "jinid":"5",
            "addtime":"[22:05-22:55]",
            "src":"../images/jin5.jpg",
            "jinintro":"贵州茅台集团原浆酒35特卖组",
            "jinprice":"345"},
        {
            "jinid":"6",
            "addtime":"[22:56-23:05]",
            "src":"../images/jin6.jpg",
            "jinintro":"贵州茅台集团原浆酒15特卖组",
            "jinprice":"￥745"},
        {
            "jinid":"7",
            "addtime":"[23:10-23:30]",
            "src":"../images/jin7.jpg",
            "jinintro":"贵州茅台集团原浆酒15特卖组",
            "jinprice":"￥565"
        },
        {
            "jinid":"8",
            "addtime":"[23:36-00:00]",
            "src":"../images/jin8.jpg",
            "jinintro":"贵州茅台集团原浆酒15特卖组",
            "jinprice":"￥345"}
    ];
    loadjin(_arrjin);
    //加载json函数
    function loadjin(data){
        for(var n=0;n<=$(".list-lun").size()-1;n++){
            for(var i=0;i<Math.ceil(data.length/4);i++){
                var $li = $("<li>");
                for(var j=0;j<4;j++){
                    var $jintu = $("<div>");
                    $jintu.addClass("jintu-box");
                    //插入时间
                    $addtime = $("<p>");
                    $addtime.addClass("addtime");
                    $addtime.text(data[i*4+j].addtime);
                    //插入图片
                    var $img = $("<img>");
                    $img.attr("src",data[i*4+j].src);
                    var $imga = $("<a>");
                    $imga.attr("href","goodsdetial.html");
                    $imga.append($img);
                    //console.log(data[i*4+j].src);
                    //插入简介
                    $jinintro = $("<a>");
                    $jinintro.addClass("jinintro");
                    $jinintro.attr("href","#");
                    $jinintro.text(data[i*4+j].jinintro);
                    //插入价格
                    $jinprice = $("<p>");
                    $jinprice.addClass("jinprice");
                    $jinprice.text(data[i*4+j].jinprice);
                    //插入各个标签
                    $jintu.append($addtime);
                    $jintu.append($imga);
                    $jintu.append($jinintro);
                    $jintu.append($jinprice);
                    $li.append($jintu);
                }
                $(".list-lun").eq(n).append($li);
            }

        }
    }
    //点击今日热播向右
    var xia = 1;
    $(".jinyou").click(function(){
        $(".list-lun1>li").eq(xia).css({"display":"block"}).siblings().css({"display":"none"});
        $(".list-lun2>li").eq(xia).css({"display":"block"}).siblings().css({"display":"none"});
        xia++;
        if(xia>$(".list-lun1>li").size()-1){
            xia = 0;
        }
        if(xia>$(".list-lun2>li").size()-1){
            xia = 0;
        }
    });
    //向左走
    $(".jinzuo").click(function(){
        $(".list-lun1>li").eq(xia).css({"display":"block"}).siblings().css({"display":"none"});
        $(".list-lun2>li").eq(xia).css({"display":"block"}).siblings().css({"display":"none"});
        xia--;
        if(xia<0){
            xia = $(".list-lun1>li").size()-1;
        }
        if(xia<0){
            xia = $(".list-lun2>li").size()-1;
        }

    });
    //json加载一楼商品
    var _arrfo = [
        {"fosrc":"../images/fo1.jpg","fointro":"花花公子商务男鞋庆典组合","foprice":"￥398"},
        {"fosrc":"../images/fo2.jpg","fointro":"（清仓）花花公子高端休闲夹克款羊毛大衣特供组","foprice":"￥268"},
        {"fosrc":"../images/fo3.jpg","fointro":"波司登.上羽韩版时尚休闲糖果色中长款羽绒服","foprice":"￥199"},
        {"fosrc":"../images/fo4.jpg","fointro":"芭比弹力加绒加厚时尚仿牛仔打底裤3+3+3超值组","foprice":"￥398"},
        {"fosrc":"../images/fo5.jpg","fointro":"侑恩四彩羽绒棉保暖裤4+2件超值组","foprice":"￥199"},
        {"fosrc":"../images/fo6.jpg","fointro":"拉帝.布莱特仿绵羊皮超厚加绒皮衣1+1超值组","foprice":"￥268"},
        {"fosrc":"../images/ft1.jpg","fointro":"一叶子蜂王浆4D提拉面膜尊享组","foprice":"￥299"},
        {"fosrc":"../images/ft2.jpg","fointro":"朗圣洁生物活性固齿修复牙膏升级组","foprice":"￥199"},
        {"fosrc":"../images/ft3.jpg","fointro":"韩束红动中国十效裸妆修容霜套组","foprice":"￥299"},
        {"fosrc":"../images/ft4.jpg","fointro":"LANTERN兰亭洁颜卸妆美肤组","foprice":"￥199"},
        {"fosrc":"../images/ft5.jpg","fointro":"冰希黎boitown浪漫香氛情人节","foprice":"￥199"},
        {"fosrc":"../images/ft6.jpg","fointro":"韩束红石榴鲜活水盈透润保湿组","foprice":"￥299"},
        {"fosrc":"../images/fth1.jpg","fointro":"周家庄五谷蔬果速食营养粥特惠组","foprice":"￥199"},
        {"fosrc":"../images/fth2.jpg","fointro":"(双11)宫葆秋冬滋补阿胶糕4+2惊爆组","foprice":"￥199"},
        {"fosrc":"../images/fth3.jpg","fointro":"中粮集团泰国乌汶府茉莉香米4袋装","foprice":"￥299"},
        {"fosrc":"../images/fth4.jpg","fointro":"（海）吴三公香菇68g*6袋+吴三公银耳28g*2袋","foprice":"￥78"},
        {"fosrc":"../images/fth5.jpg","fointro":"五粮液五龙宾红樽特惠组（两箱）","foprice":"￥598"},
        {"fosrc":"../images/fth6.jpg","fointro":"法莱雅橡木桶干红葡萄酒超值组","foprice":"￥268"},
        {"fosrc":"../images/fou1.jpg","fointro":"新丰龙红铁木实木菜板1+1超值组","foprice":"￥328"},
        {"fosrc":"../images/fou2.jpg","fointro":"润友管道疏通剂+洗衣液清洁套组","foprice":"￥199"},
        {"fosrc":"../images/fou3.jpg","fointro":"思家旺电动扫拖一体机1+1特惠组","foprice":"￥249"},
        {"fosrc":"../images/fou4.jpg","fointro":"（欧洛朗即热式水龙头1+1暖冬组","foprice":"￥299"},
        {"fosrc":"../images/fou5.jpg","fointro":"美苏多功能小N锅1+1超值组","foprice":"￥199"},
        {"fosrc":"../images/fou6.jpg","fointro":"北欧时尚家居保温壶套装","foprice":"￥299"}
    ]
    loadjsonstr(_arrfo);
    function loadjsonstr(_arrfo){
        for(var i=0;i<_arrfo.length;i++){
            var suoyin = i;
            //创建img并插入
            var $foimg = $("<img>");
            $foimg.attr("src",_arrfo[i].fosrc);
            var $foaimg = $("<a>");
            $foaimg.attr("href","goodsdetial.html");
            $foaimg.append($foimg);
            $(".one-right>li").eq(suoyin).append($foaimg);
            //创建p简介
            var $fointro = $("<a>");
            $fointro.attr("href","#");
            $fointro.addClass("fointro");
            $fointro.text(_arrfo[i].fointro);
            $(".one-right>li").eq(suoyin).append($fointro);
            //创建价格
            var $foprice = $("<span>");
            $foprice.text(_arrfo[i].foprice);
            $foprice.addClass("foprice");
            $(".one-right>li").eq(suoyin).append($foprice);
        }
    }
    $(".search-text").on("focus",function(){
        console.log("haha");
        var _json = decodeURIComponent(document.cookie);
        console.log(_json);
        var _jsonarr = _json.split("seartext=");
        console.log(_jsonarr[1]);
        var $newli = $("<li>");
        $newli.text(_jsonarr[1]);
        $(".lishi-list").append($newli);
    })
    $(".search-index").on("click",function(){
        var $hissear = $(".search-text").val();
        saveCookie("seartext",$hissear,3);

    });



});

