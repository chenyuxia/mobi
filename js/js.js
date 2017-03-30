/**
 * Created by CYX on 2016/1/26.10:52
 */


$(function () {
    //头部语言版本
    $(".cyx_topLang").toggle(function () {
        $(this).addClass("cyx_topLangH");
        $(this).find("em").html("ch");
    },function(){
        $(this).removeClass("cyx_topLangH");
        $(this).find("em").html("en");
    })

    //行业咨询
    $(".cyx_contFourRc").click(function(){
        var index = $(this).index();
        $(".cyx_contFourRc").removeClass("hover").eq(index).addClass("hover");
        $(".cyx_contFourE").hide().eq(index).show();
        $(".cyx_contFour .cyx_floatE span").hide().eq(index).show();
    })

    //banner
    $(".cyx_bannerEc1, .cyx_bannerEc2, .cyx_bannerEc3, .cyx_bannerEc4, .cyx_bannerEc5").hover(function () {
        $(this).find(".cyx_bannerEk").stop(true, true).fadeIn();
    },function(){
        $(this).find(".cyx_bannerEk").stop(true, true).fadeOut();
    });
    setTimeout(function () {
        $(".cyx_bannerEc1 .cyx_bannerEk").stop(true, true).fadeIn();
    }, 100);
    setTimeout(function () {
        $(".cyx_bannerEc1 .cyx_bannerEk").stop(true, true).fadeOut();
    }, 800);
    //========================================
    setTimeout(function () {
        $(".cyx_bannerEc2 .cyx_bannerEk").stop(true, true).fadeIn();
    }, 800);
    setTimeout(function () {
        $(".cyx_bannerEc2 .cyx_bannerEk").stop(true, true).fadeOut();
    }, 1600);
    //========================================
    setTimeout(function () {
        $(".cyx_bannerEc3 .cyx_bannerEk").stop(true, true).fadeIn();
    }, 1600);
    setTimeout(function () {
        $(".cyx_bannerEc3 .cyx_bannerEk").stop(true, true).fadeOut();
    }, 2400);
    //========================================
    setTimeout(function () {
        $(".cyx_bannerEc4 .cyx_bannerEk").stop(true, true).fadeIn();
    }, 2400);
    setTimeout(function () {
        $(".cyx_bannerEc4 .cyx_bannerEk").stop(true, true).fadeOut();
    }, 3200);
    //========================================
    setTimeout(function () {
        $(".cyx_bannerEc5 .cyx_bannerEk").stop(true, true).fadeIn();
    }, 3200);
    setTimeout(function () {
        $(".cyx_bannerEc5 .cyx_bannerEk").stop(true, true).fadeOut();
    }, 4000);

    //首页第一块
    $(".cyx_contTwoCc1, .cyx_contTwoCc2, .cyx_contTwoCc3, .cyx_contTwoCc4").hover(function() {
        $(this).find("img").stop(true, true).fadeOut();
        $(this).find(".cyx_contTwoCz").stop(true, true).fadeIn();
    },function(){
        $(this).find("img").stop(true, true).fadeIn();
        $(this).find(".cyx_contTwoCz").stop(true, true).fadeOut();
    })
});


$(function(){
    //判断浏览器属性
    if($.browser.msie && $.browser.version < 10){
        $('.dowebok-explain').show();
    }

});
//动画
$(function(){
    var obj=$(".cyx_contOne");
    var obj2=$(".cyx_contTwo");
    var obj3=$(".cyx_contThree");
    var obj4=$(".cyx_contFour");
    var obj5=$(".cyx_banner");
    var navH = obj.offset().top; //获取要定位元素距离浏览器顶部的距离
    var navH2 = obj2.offset().top; //获取要定位元素距离浏览器顶部的距离
    var navH3 = obj3.offset().top; //获取要定位元素距离浏览器顶部的距离
    var navH4 = obj4.offset().top; //获取要定位元素距离浏览器顶部的距离
    var navH5 = obj5.offset().top; //获取要定位元素距离浏览器顶部的距离
    //滚动条事件
    $(window).scroll(function(){
        var scroH = $(this).scrollTop(); //获取滚动条的滑动距离
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定

        if(scroH+250>=navH){
            $(document).ready(function(){
                $('.cyx_contTwoCc1').addClass('animated slideInDown ');
                $('.cyx_contTwoCc2').addClass('animated slideInLeft ');
                $('.cyx_contTwoCc3').addClass('animated slideInRight ');
                $('.cyx_contTwoCc4').addClass('animated bounceIn ');
            });
        }
        if(scroH+200>=navH2){
            $(document).ready(function(){
                $('.cyx_contOneCc').addClass('animated lightSpeedIn');
            });
        }
        if(scroH+250>=navH3){
            $(document).ready(function(){
                $('.cyx_contThreeC').addClass('animated slideInLeft');
            });
        }
        if(scroH+300>=navH4){
            $(document).ready(function(){
                $('.cyx_contFour .cyx_overH').addClass('animated slideInRight');
            });
        }
        if(scroH+500>=navH5){
            $(document).ready(function(){
                $('.cyx_bannerR').addClass('animated bounceIn');
            });
        }
    })
});
