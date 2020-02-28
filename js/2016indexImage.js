// JavaScript Document// JavaScript Document
(function($){
  $.fn.cnpcFocus = function(options){
	   var opts = $.extend({},$.fn.defaults,options);
	   return this.each(function(){
		   var _self = $(this);	
		   var timer = null;
		   var initNum = 0;	   
		   var focus_view = $(this).find(".focus-view");
		   var focus_view_lis = focus_view.find("li");
		   var focus_size = focus_view_lis.size();
		   var focus_img = focus_view.find("img");
		   initFocus();
		   $(this).hover(function(){
			 clearInterval(timer);   
		   },function(){
			 timer = setInterval(function(){
			     autoPlayView();	 
			 },opts.autoTimer);
		   });		   
		   function initFocus(){
			 createHtml();
			 changeMove(0);	 
			 _self.find(".focus-btn").find("li").live("click",function(){
				  changeMove($(this).index());
			 });
			 timer = setInterval(function(){
			     autoPlayView();	 
			 },opts.autoTimer);
		   }
		   function createHtml(){			  
			  var sHtml = '';
			  sHtml += "<div class='focus-bg'></div><ul class='focus-text'>";
			  for(var i=0; i<=focus_size-1; i++){				 
				 sHtml += "<li><a href='"+focus_view.find('a').eq(i).attr("href")+"' target='_blank'>"+focus_img.eq(i).attr("title")+"</a></li>";
			  }  
			  sHtml += "</ul><ul class='focus-btn'>";
			  for(var i=0; i<=focus_size-1; i++){
				  sHtml += "<li></li>";
			  } 
			  sHtml += "</ul>"; 
			  _self.append(sHtml);
		   }
		   function changeMove(num){
			   initNum = num;
			   focus_view_lis.eq(num).css("display","block").siblings().css("display","none");
			   _self.find(".focus-text").find("li").eq(num).css("display","block").siblings().css("display","none");
			  _self.find(".focus-btn").find("li").eq(num).addClass("active").siblings().removeClass("active");
		   }
		   function autoPlayView(){
			   initNum = initNum>=focus_size-1?0:(initNum+=1);			   
			   changeMove(initNum);
		   }
	   });
  }
  $.fn.defaults = {
	  autoTimer : 2000
  }
  /*变换形式对外接口函数*/
  $.fn.moveType = function(obj){
	  
  }
})(jQuery);