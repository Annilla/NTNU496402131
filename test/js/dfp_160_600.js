// JavaScript Document
(function($) {
$(function(){
	/*
	-------------------------------------
	左右直立廣告
	-------------------------------------
	*/
	//因為會影響曝光，所以動態插入廣告
	if($(window).width()>1430 & $(window).height()>800){
		
		//視窗寬大於1024才插入
		var str ="<div id='dfp_160_600_L'>";
		str += "<img src='img/channel/dfp_160_600_1.jpg' alt='這裡之後改放dfp'/>";
		str += "<";
		str += "/div>";
		str += "<div id='dfp_160_600_R'>";
		str += "<img src='img/channel/dfp_160_600_2.jpg' alt='這裡之後改放dfp'/>";
		str += "<";
		str += "/div>";
		$('body.dfp_160 main').append(str);
		
		/*設置初始位置*/
		var initialTop,initialGap=30,initialLeft,initialRight;
		function dfp_160_positon(){
			initialTop = $("#mainWrap").offset().top;
			initialLeft = $("#mainWrap").offset().left-initialGap-$("#dfp_160_600_L").width();
			initialRight = $("#mainWrap").offset().left+1050+initialGap;
			$("#dfp_160_600_L").css({
				"top":initialTop+"px","left":initialLeft+"px"});
			$("#dfp_160_600_R").css({"top":initialTop+"px","left":initialRight+"px"
});
			}
		$(window).resize(dfp_160_positon);
		dfp_160_positon();

		//跟著頁面捲動
		var ad160Fix = 0;//記錄是否fix過，讓程式執行一次就好
		var ad160Fix2 = 0;
		var navOffset = $("nav").offset().top;
		$(window).scroll(function(){
			if($(window).scrollTop()<initialTop){
				/*between top and main*/
				$("#dfp_160_600_L").css({
					"position":"absolute",
					"top": $("#mainWrap").offset().top
					});
				$("#dfp_160_600_R").css({
					"position":"absolute",
					"top": $("#mainWrap").offset().top
					});
				ad160Fix=0;
				}
			else if($(window).scrollTop()>initialTop && ad160Fix==0){
				/*between main and footer*/
				$("#dfp_160_600_L").css({
					"position":"fixed",
					"top": "53px"
					});
				$("#dfp_160_600_R").css({
					"position":"fixed",
					"top": "53px"
					});
				ad160Fix = 1;
				}
			else if($(window).scrollTop()<initialTop && ad160Fix==1){
				/*back between header and main*/
				$("#dfp_160_600_L").css({
					"position":"absolute",
					"top": initialTop
					});
				$("#dfp_160_600_R").css({
					"position":"absolute",
					"top": initialTop
					});
				ad160Fix = 0;
				}
			else if($(window).scrollTop()>initialTop && $(window).scrollTop()>$("footer").offset().top-800 && ad160Fix2==0){
				/*between main and footer out*/
				$("#dfp_160_600_L").css({
					"position":"absolute",
					"top": $("footer").offset().top - 800
					});
				$("#dfp_160_600_R").css({
					"position":"absolute",
					"top": $("footer").offset().top - 800
					});
				ad160Fix2 = 1;
				}
			else if($(window).scrollTop()>initialTop && $(window).scrollTop()<$("footer").offset().top-800 && ad160Fix2==1){
				/*back between main and footer*/
				$("#dfp_160_600_L").css({
					"position":"fixed",
					"top": "53px"
					});
				$("#dfp_160_600_R").css({
					"position":"fixed",
					"top": "53px"
					});
				ad160Fix2 = 0;
				}
				});
			}
});
}) (jQuery);