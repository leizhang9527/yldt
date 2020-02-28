$(function(){
	//首页banner图片轮播

	$(".fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", vis:"auto", autoPlay: "true", autoPage:"true", trigger:"click" ,interTime:5500});

	//新闻中心\集团动态等tab
	 $('#tab1 a').hover(function(){
        //获得当前被点击的元素索引值
         var Index = $(this).index();	
		//给菜单添加选择样式
	    $(this).addClass('current').siblings().removeClass('current');		   		
		//显示对应的div
		$('#tab_list ul').eq(Index).show().siblings('ul').hide();
   });
	//新闻中心右边图片轮播
$(".focus-cnpc").cnpcFocus();
//微博加关注弹出层
$(".guanzhu").mouseenter(function(){
		$(this).find("#guanzhu").show();
	}).mouseleave(function(){
		$(this).find("#guanzhu").hide();
	});

	//微信弹出层
$(".weixiImage").mouseenter(function(){
		$(this).find("#weixiImage").show();
	}).mouseleave(function(){
		$(this).find("#weixiImage").hide();
	});

//环境与社会图说
$(".hjysh_button").click(function(){
	if($(this).hasClass("up")){
		$(".hwysh_image_textcontent").show();
		$(this).removeClass("up").addClass("down");
	}
	else{
		$(".hwysh_image_textcontent").hide();
		$(this).removeClass("down").addClass("up");
		}	
	});


//石油百科图说
$(".sybk_button").click(function(){
	if($(this).hasClass("up")){
		$(".sybk_image_textcontent").show();
		$(this).removeClass("up").addClass("down");
		//$(".sybk_image_text").css("top","85px");
	}
	else{
		$(".sybk_image_textcontent").hide();
		$(this).removeClass("down").addClass("up");
		//$(".sybk_image_text").css("top","137px");
		}	
	});

	//油品市场tab	
		
var s_zIndex=9
$('.mt5 .ypsc_title li').mouseenter(function(){
var _index=$(this).index();
s_zIndex+=9;
$(this).addClass('hover').siblings().removeClass('hover'); 
var oShow=$('.mt5 .quxian').eq(_index);
oShow.css('z-index',s_zIndex)
}) 




//产品与服务下拉菜单

$(".xia1").mouseenter(function(){
		$(this).find(".xia1_menu").show();
	}).mouseleave(function(){
		$(this).find(".xia1_menu").hide();
	});

//网站导航下拉菜单
		$(".link1").mouseenter(function(){
		$(this).find(".link1_menu").show();
	}).mouseleave(function(){
		$(this).find(".link1_menu").hide();
	});
	$(".xia1").mouseenter(function(){
		$(this).find(".xia1_menu").show();
	}).mouseleave(function(){
		$(this).find(".xia1_menu").hide();
	});
	//企业文化图片滑动
	 dataList13.hoverEven();
	 
	 
	 	//出版物
	  var mouseA=$('.newchubanwu .indexejlm_title a')
   mouseA.mouseenter(function(){
    var _index=mouseA.index($(this))
    mouseA.removeClass('active').eq(_index).addClass('active');
    $('.cbwcenter ul').eq(_index).show().siblings().hide() 
	 })
	 $('.indexejlm_title_cxhg').hover(function(){
$('#cxhgtc').css('display','block');
},function(){
$('#cxhgtc').css('display','none');
})


});
//企业文化图片滑动
var dataList13 = {
    hoverEven:function(){
        var $_dataList13 = $(".dataList13");
        $_dataList13.each(function(){
            var _this = $(this);
            _this.find(".conts").hover(
                function(){
                    var _info = ($(this).parent().attr("data-info")).split(',');
                    var closeW = parseInt($.trim(_info[0]));
                    var openW = parseInt($.trim(_info[1]));
                    _this.find(".openItem").stop().animate({width:closeW}, {duration: 500}).removeClass("openItem");
                    $(this).parent().stop().animate({width:openW}, {duration: 500}).addClass("openItem");
                    return false;
                },
                function(){}
            );
        });
    }
};