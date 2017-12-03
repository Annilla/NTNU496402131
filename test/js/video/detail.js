// JavaScript Document
(function($) {
$(function(){
	/*
	-------------------------------------
	蓋檯
	-------------------------------------
	*/
	//動態插入
	$("#cover").append('<a id="allow18" href="#content18"></a>');
	$("#cover").append('<a id="fbPageLikeBtn" href="#fbPageLike"></a>');
	
	//設置跳窗
	$("#allow18").colorbox({
				inline: true,
				width: 480,
				height: 250,
				scrolling: false,
				fixed: true,
				closeButton: false,
				overlayClose: false
				});
	$("#fbPageLikeBtn").colorbox({
				inline: true,
				width: 480,
				height: 250,
				scrolling: false,
				fixed: true,
				overlayClose: false
				});
	
	//呼叫廣告蓋檯
	$("#allow18").trigger("click");
	
	//18禁自制關閉按鈕
	$("#content18 ul.btn li:first-child").click(function(){$.colorbox.close();});
	$("#content18 ul.btn li:last-child").click(function(){history.back();});
	
	//判別按讚出現時機
	var fbShareShow = false; //判斷出現一次就好
	/*$(window).scroll(function(){
		if($(window).scrollTop()>($("#fbShare").offset().top-$(window).height()/3) && fbShareShow == false){
			$("#fbPageLikeBtn").trigger("click");
			fbShareShow = true;
			}
		});*/
		

});
}) (jQuery);