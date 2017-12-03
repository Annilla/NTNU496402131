// JavaScript Document
(function($) {
$(function(){
	/*
	-------------------------------------
	動態插入youtube圖片
	-------------------------------------
	*/
	$(".videoImg").each(function(i,e){
		$(this).prepend('<img src="http://img.youtube.com/vi/' + $(this).data("id") + '/hqdefault.jpg">');
		});
});
}) (jQuery);