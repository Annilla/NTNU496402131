// JavaScript Document
(function($) {
$(function(){
	/*
	-------------------------------------
	設置slogan位置
	-------------------------------------
	*/
	$(window).scroll(function(){
			$("#movieSlogan").css({
				"top": ($("#movieMag").offset().top-30)+"px"});
		});
	$("#movieSlogan").css({
		"top": ($("#movieMag").offset().top-30)+"px",
		"margin-left": "-20px"
		});
	/*$("#blogSlogan").css({
		"top": ($("#blog").offset().top-$("nav").height()-30)+"px"});*/
});
}) (jQuery);