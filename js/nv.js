$(function(){
		// 页头投资者下拉菜单
	$(".tzz").mouseenter(function(){
	   $(".v_cage").show();
	}).mouseleave(function(){
		$(".v_cage").hide();
	});
	
		// 页头移动版弹出层
	$(".yidb").mouseenter(function(){
		$(this).addClass("yidb1");
		$(".yd_menu").show();
	}).mouseleave(function(){
		$(this).removeClass("yidb1");
		$(".yd_menu").hide();
	});

	// 页头全站检索下拉菜单	
	$(".sea_l").mouseenter(function(){
		$(".sea_cage").show();
	}).mouseleave(function(){
		$(".sea_cage").hide();
	});
	
	$(".sea_cage li").click(function(){
		$('#sea_vage').html($(this).find("a").html()+"<b></b>");
	});

	// 页头微信划动层	
	$(".weixin_menu").mouseenter(function(){
		$("#headerweiboimage").show();
	}).mouseleave(function(){
		$("#headerweiboimage").hide();
	});

	/*页头导航下拉菜单*/

		$('.mainNav li').hover(function(){		
			var L = $(this).position().left;
			var R = $(this).parents('.mainNav').outerWidth() - L;
			var iWidth = $(this).find('.subMenu').outerWidth();
			if(iWidth > R){
				var pNum = $(this).find('.subMenu').outerWidth() - $(this).outerWidth();
				$(this).find('.subMenu').css({'position':'absolute','left':-pNum});
			}			
			$(this).find('a').addClass('active');
			$(this).find('.subMenu').css('display','block');	
		},function(){
			$(this).find('a').removeClass('active');
			$(this).find('.subMenu').css('display','none');	
		});
		$('.mainNav .subMenu').hover(function(){
			$(this).parent().find('a').addClass('active')
		},function(){
			$(this).parent().find('a').removeClass('active')
		})
		$('.fixNav .mainNav li').hover(function(){
			$('.fixNav .mainNav .navtit').addClass('hover');
		},function(){
			$('.fixNav .mainNav .navtit').removeClass('hover');
		});		
		
		$('.fixNav .mainNav li').hover(function(){
			$('.fixNav .mainNav .navtit').addClass('hover');
		},function(){
			$('.fixNav .mainNav .navtit').removeClass('hover');
		});
		
		var oritop=$('.mainNav').position().top;
		var iHeight=$($('.mainNav')[0]).height();
		var target=$(window);
		if($('#s4-workspace').length>0){
			target=$('#s4-workspace');
		}
		target.scroll(function(){
			/*if(target.scrollTop()>=100){
				$('.fixNav').fadeIn('normal').css('z-index','9999999');

			}else{
				$('.fixNav').fadeOut(0);
			}*/
		/*
			if(target.scrollTop()>=(oritop+iHeight)){
				if($('.fixNav').prop('style')['display']=='none'){
					if(target.attr('id')!=undefined){
						if($('#s4-ribbonrow').prop('style')['display']=='' || $('#s4-ribbonrow').prop('style')['display']=='block')
						{
							$('.fixNav').css({top:$('#s4-ribbonrow').height()-1});
						}
					}
					$('.fixNav').fadeIn('normal').find('.navtit');
					setTimeout(function(){
						$('.fixNav .navtit').css({borderColor:'#bc0f0f'});
					},0);
				}
				if($.browser.version < 7){
					$('.fixNav').css({position:'absolute',top:target.scrollTop(),left:0});
					$('.uparrow').css({position:'absolute',top:target.scrollTop()+target.height()-20-$('.uparrow').height(),right:20});
				}

				if($(window).width()>1024){
					$('.uparrow').fadeIn(300);
				}
			}else{
				$('.fixNav .navtit').css('borderColor','transparent');
				$('.fixNav').fadeOut(0);
				$('.uparrow').fadeOut(100);
			}*/




		});
		$(window).resize(function(){
			if(target.scrollTop()>=(oritop+iHeight)){
				var disWidth=$(window).width();
				var mainWidth=$('.fixNav .mainNav').outerWidth();
			}
			
		});
	
	
	
});