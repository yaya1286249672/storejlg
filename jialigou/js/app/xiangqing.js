/**
 * Created by Administrator on 2017/1/9.
 */
$(function(){
    $(".gxiang h2").on("click",function(){
        $(".gxiang ul").stop().slideToggle(500);
    });
    $("#xstulist>li>img").on("mouseenter",function(){
        //$("#simg").attr("src",$(this).eq(0).attr("src"));
        $("#simg").attr("src",$(this).eq(0).attr("src"));
        $("#bimg").attr("src",$(this).eq(0).attr("src"));
    });
    //放大镜
    $("#smbox").on("mouseenter",function(e){
        e = e||window.event;
        $("#sview").css("display","block");
        $("#bview").css("display","block");
        $(document).on("mousemove",function(e){
            var _stp = $(window).scrollTop();
            e = e||window.event;
            var _left = e.clientX-$(".bingxi").eq(0).offset().left-$("#sview").outerWidth()/2;
            var _top = e.clientY-$(".bingxi").eq(0).offset().top-$("#sview").outerHeight()/2+_stp;
            if(_left<=0){
                _left = 0;
            }
            if(_left>$("#simg").outerWidth()-$("#sview").outerWidth()){
                _left=$("#simg").outerWidth()-$("#sview").outerWidth()
            }
            if(_top<=0){
                _top = 0;
            }
            if(_top>$("#simg").outerHeight()-$("#sview").outerHeight()){
                _top=$("#simg").outerHeight()-$("#sview").outerHeight()
            }
            $("#sview").css("left",_left);
            $("#sview").css("top",_top);
            //小视窗的宽高
            var _w = $("#bview").outerWidth()*$("#simg").outerWidth()/$("#bimg").outerWidth();
            var _h = $("#bview").outerHeight()*$("#simg").outerHeight()/$("#bimg").outerHeight();
            $("#sview").css("width",_w);
            $("#sview").css("height",_h);
            //大视窗的位移
            var _bl = _left*$("#bimg").outerWidth()/$("#simg").outerWidth();
            var _bt = _top*$("#bimg").outerHeight()/$("#simg").outerHeight();
            $("#bimg").css("left",-_bl);
            $("#bimg").css("top",-_bt);
        })

    });
    $("#smbox").on("mouseleave",function(){
        $("#sview").css("display","none");
        $("#bview").css("display","none");
        $(document).on("mousemove",null);

    })

    $("#jiahao").on("click",function(){
        $xscount = $("#xscount").val();
        $xscount++;
        $("#xscount").val($xscount);
    })
    $("#jianhao").on("click",function(){
        $xscount = $("#xscount").val();
        $xscount--;
        if($xscount<=1){
            $xscount=1
        }
        $("#xscount").val($xscount);
    });
    //评论部分选项卡
    $("#xs-change>li").on("click",function(){
        console.log($("#xs-change>li"));
        $(this).eq(0).css("background","url(../images/red.png) no-repeat").siblings().css("background","url(../images/gray.png) no-repeat");
        console.log($(this).index());
        $("#showlist>li").eq($(this).index()).addClass("listxian").siblings().removeClass("listxian");
    })
    //评价部分的选项卡
    $(".xspj").on("click",function(){
        $(".c-xspj").eq($(this).index()).css("display","block").siblings(".c-xspj").css("display","none");
    });
    //回到顶部

    $("#huitop").on("click",function(){
        $("body,html").animate({scrollTop:0},2000)
    })

    //加入购物车
    $("#jiagou").on("click",function(){
        var _sxintro = $(".bxbt>strong").text();
        console.log(_sxintro);
        var _sxshu = $("#xscount").val();
        console.log(_sxshu);
        var $sxjia = $(".hese").eq(0).text();
        var $jibai = $sxjia.split("￥");
        var _sxjia = $jibai[1];
        console.log(_sxjia);
        var _sxjson = {
            gid:1,
            mingcheng:_sxintro,
            xscount:parseInt(_sxshu),
            xsjia:parseInt(_sxjia),
            xspic:"../images/xs1.jpg"
        };
        console.log(_sxjson);
        addcar(_sxjson);
        function addcar(_sxjson){
            var goods = getCookie(_sxjson.gid);
            /*if(goods){
                var Jgoods = JSON.parse(goods);
                Jgoods.xscount++;
                modifyCookie(_sxjson.gid,JSON.stringify(Jgoods),5);
            }else{
                saveCookie(_sxjson.gid,JSON.stringify(_sxjson),5);
            }*/
            saveCookie(_sxjson.gid,JSON.stringify(_sxjson),5);
            console.log(goods);

        }

    })
})