// JavaScript Document
(function($) {
$(function(){
	/*
	-------------------------------------
	選單
	-------------------------------------
	*/
	//選單動畫
	var menuBopen = 0;//次選單是否展開
	var initialUl = true;//修正選單最後ul次選單掉下去
	$("#mainMenu >ul >li:has(ul)").hover(function () {
        //選單淡入
		$(this).find("ul").stop(true,true).fadeIn();
		//調整ul寬度
		var ulW = 0;
		$(this).find("li").each(function(i){
			ulW += $(this).width()+3;/*css letter-spacing*/
			});
		if($(this).is(':last-child') && initialUl==true && $(window).width()<=1024){
			ulW =ulW+40; /*修正最後一個ul超出去*/
			initialUl = false;
			$(this).find("ul").width(ulW+1);/*+1修正firefox掉下去*/
			}
		else{$(this).find("ul").width(ulW+1);}/*+1修正firefox掉下去*/
		//如果超出螢幕，邊邊就靠在螢幕上+20
		if($(this).offset().left+$(this).find("ul").width()>$(window).width()){
			$(this).find("ul").css({
				"margin-left": "-"+($(this).find("ul").width()-$(window).width()+$(this).offset().left+20)+"px"});
			}
		//背景下滑
		if(menuBopen == 0 && $(this).has("ul").length!=0){
			$("#menuB").stop(true,true).animate({"height":"53px"},"fast");
		    menuBopen = 1;}
    }, function () {  
        //選單淡出
		$(this).find("ul").stop(true,true).fadeOut(200);
		//背景上滑
		if(menuBopen == 1 && $(this).has("ul").length!=0){
			$("#menuB").stop(true,true).animate({"height":"0px"},"fast");
		    menuBopen = 0;}
    });
	
	//偵測頁面滑超過選單
	var menuY = $("#mainMenu").offset().top;//保存選單原位置
	var menuFix = 0;//記錄是否fix過，讓程式執行一次就好
	/*為了修正左側socialBox蓋到選單*/
	$("body.menuFixed nav").css({"position":"fixed","top":menuY});
	$("body.menuFixed nav").css({"position":"relative","top":""});
	$(window).scroll(function(){
		if($(window).scrollTop()>menuY && menuFix==0){
			menuFix = 1;
			//選單固定上方
			$("body.menuFixed nav").css({
				"position":"fixed",
				"top":"0"
				});
			$("body.menuFixed nav").animate({
				"background-color":"#0A58A6",
				"color":"#FFF"});
			$("body.menuFixed #mainMenu ul li.sub").removeClass("sub");
			$("body.menuFixed #mainMenu ul li:has(ul)").addClass("subFix");
			$("body.menuFixed nav").addClass("fixed");
			//選單動畫
			$("body.menuFixed #juksyLogo a img").hide("drop",{direction: "down"},1000);
			$("body.menuFixed #navHome").show().animate({width:"139px"});
			}
		else if($(window).scrollTop()<menuY && menuFix==1){
			menuFix = 0;
			//選單回原位置
			$("body.menuFixed nav").css({
				"position":"relative",
				"top":""
				});
			$("body.menuFixed nav").animate({
				"background-color": "#FFF",
				"color":"#595757"});
			$("body.menuFixed #mainMenu ul li.subFix").removeClass("subFix");
			$("body.menuFixed #mainMenu ul li:has(ul)").addClass("sub");
			$("body.menuFixed nav").removeClass("fixed");
			//選單動畫
			$("body.menuFixed #mainMenu >ul").hide();
			$("body.menuFixed #juksyLogo a img").stop(true,true).show("drop",{direction: "down"},1000);
			$("body.menuFixed #navHome").hide().css({width:"0px"}).queue(
					  function(next){
						  $("body.menuFixed #mainMenu >ul").fadeIn(1000);
					  next();});
			}
		});
	
	/*
	-------------------------------------
	回至最上方 goTop
	-------------------------------------
	*/
	$("#goTop").hide();//隱藏
	//回到最上方
	$("#goTop").click(function(){
		$('html,body').animate({scrollTop:"0"},1000);
		});
	/*回到最上方初始位置*/
	var goTopGap=30,goTopLeft;
	function goTop_positon(){
		goTopLeft = ($(window).width()-1050)/2-$("#goTop").width()-goTopGap;
		$("#goTop").css({
			"right":goTopLeft+"px"
			});
		}
	$(window).resize(goTop_positon);
	goTop_positon();
	
	var goTopShow = 0;//記錄是否show過，讓程式執行一次就好
	$(window).scroll(function(){
		if($(window).scrollTop()>menuY && goTopShow==0){
			goTopShow = 1;
			$("#goTop").show();
			}
		else if($(window).scrollTop()<menuY && goTopShow==1){
			goTopShow = 0;
			$("#goTop").hide();
			}
		});
	
	/*
	-------------------------------------
	頁尾固定bar footerNav
	-------------------------------------
	*/
	
	/*網友們最愛*/
	var favorShow = 0;//從第一個開始輪播
	var favorTime = 5000;//間隔毫秒數
	var $favorUl = $(".footerNav .footerNavWrap .footerNavR ul.favorite");
	var $favorLi = $(".footerNav .footerNavWrap .footerNavR ul.favorite li");
	function changeFavor(){
		$favorLi.eq(favorShow).hide();
		favorShow++;
		if(favorShow>=$favorLi.length){favorShow = 0;}
		$favorLi.eq(favorShow).show("drop",{direction: "down"},500);
		favorTimer = setTimeout(changeFavor,favorTime);
	}
	var favorTimer = setTimeout(changeFavor,favorTime);
	/*滑鼠滑過靜止動畫*/
	$favorUl.hover(function(){clearTimeout(favorTimer)},function(){favorTimer = setTimeout(changeFavor,favorTime);});
	
	/*
	-------------------------------------
	熱門關鍵字 keywords
	-------------------------------------
	*/
	var $searchBox = $("#subBar .input");
	var $keywords = $("form#subBar .keywords");
	var $keywordsWrap = $("form#subBar .keywords .keywordsWrap");
	var $window = $(window);
	var $keywordsX, $keywordsY, $keywordsXmax, $keywordsYmax;//泡泡範圍
	var mouseX, mouseY;//滑鼠位置
	
	$(document).mousemove(function(event) {
		mouseX = event.pageX;
		mouseY = event.pageY;
	});
	$searchBox.focus(function(){
		$keywords.fadeIn('fast');
		$keywordsX = $keywordsWrap.offset().left;
		$keywordsY = $keywordsWrap.offset().top;
		$keywordsXmax = $keywordsX + $keywordsWrap.width();
		$keywordsYmax = $keywordsY + $keywordsWrap.height();
	});
	$searchBox.focusout(function(){
		if($keywordsX<mouseX && mouseX<$keywordsXmax && $keywordsY<mouseY && mouseY<$keywordsYmax){}
		else {$keywords.hide();}
	});
	$window.scroll(function(){
		$keywords.hide();
	});
	
})
}) (jQuery);