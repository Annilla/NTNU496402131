// JavaScript Document
(function($) {
$(function(){
	/*
	-------------------------------------
	蓋檯
	-------------------------------------
	*/
	//動態插入
	$(".formAlert").append('<a id="formAlert" href="#alert"></a>');
	
	//設置跳窗
	$("#formAlert").colorbox({
				inline: true,
				width: 400,
				height: 200,
				scrolling: false,
				fixed: true,
				closeButton: false,
				overlayClose: false
				});
	
	//呼叫跳窗
	$("#formAlert").trigger("click");
	
	//自制關閉按鈕
	$("#alert .btn").click(function(){$.colorbox.close();});
	
});
}) (jQuery);