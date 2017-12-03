// JavaScript Document
(function($) {
$(function(){
	/*
	-------------------------------------
	頁數置中
	-------------------------------------
	*/
	var pageNavWidth = $("#pageNavWrap ul").width();
	$("#pageNavWrap >a").each(function(index, element) {
        pageNavWidth = pageNavWidth + $(this).width()+1 + 20;/*letter-spacing: 1px; padding: 0px 10px;*/
    });
	$("#pageNavWrap").width(pageNavWidth);
	
	
	/*
	-------------------------------------
	熱門新聞newsBox，跟下方判斷左右長短功能有關，所以先放上面
	-------------------------------------
	*/
	var tabEq = 0;//記錄hover項目
	$("ul#newsCon >li").eq(1).hide();$("ul#newsCon >li").eq(2).hide();//隱藏newsCon
	//換類別
	$("ul#newsTab li").hover(function(){
		$("ul#newsTab li.choose").stop(true,true).removeClass("choose");
		$("ul#newsCon >li").eq(tabEq).hide();
		tabEq = $(this).index();
		$(this).stop(true,true).addClass("choose");
		$("ul#newsCon >li").eq(tabEq).show();
		},function(){});
	
	/*
	-------------------------------------
	插入aside_bottom廣告，跟下方判斷左右長短功能有關，所以先放上面
	-------------------------------------
	*/
	if($(window).height()>600){
		//如果視窗高度大於600，放300_600廣告
		$("#dfp_300_aside_bottom").html('<img src="img/channel/dfp_300_600.jpg" width="300" height="600" alt="這裡之後改放dfp"/>');
		$("#dfp_300_aside_bottom").height(600);
		}
	else{
		//如果視窗高度小於600，放300_250廣告
		$("#dfp_300_aside_bottom").html('<img src="img/channel/dfp_300_250.jpg" width="300" height="250" alt="這裡之後改放dfp"/>');
		$("#dfp_300_aside_bottom").height(250);
		}
	
	
	/*
	-------------------------------------
	判斷左右兩邊區塊長度，fixed較短的區塊
	-------------------------------------
	*/
	//#mainLeft和aside從頁框開始算起的總長
	var artT = $("#mainLeftWrap").offset().top;
	var asideT = $("#asideWrap").offset().top;
	var artH,asideH;
	function getHeight(){
		artH = artT+$("#mainLeftWrap").height();
		asideH = asideT+$("#asideWrap").height();
		if($("#mainLeftWrap").height()<$(window).height()){
			$("#mainLeftWrap").height($(window).height()-$("nav").height());
			artH=artT+$("#mainLeftWrap").height();
			}
		if($("#asideWrap").height()<$(window).height()){
			$("#asideWrap").height($(window).height()-$("nav").height());
			asideH=asideT+$("#asideWrap").height();
			}
		}
	
	//偵測滑鼠滾動高度決定卡住的區
	var scrollCase = 0;//記錄滑過滑鼠了沒
	$(window).scroll(function(){
		if(scrollCase==0){
			scrollCase=1;
			//不讓直的裝置使用此功能，因為跑不動
			if($(window).width()<$(window).height()){scrollCase=0;}
			}
		else{
			getHeight();
			doCase();
			}
		});
	
	var $asideBottom = $('#dfp_300_aside_bottom');
		
	function doCase(){
		//若#mainLeft較短
		if(artH-asideH<0 && artH>=$(window).height() && asideH>=$(window).height()){artShort();}
		//若#mainLeft較長
		else if(artH-asideH>0 && artH>=$(window).height() && asideH>=$(window).height()){
			 /*有廣告的時候只卡住廣告*/
			 if($asideBottom.length){artLongAd();}
			 else{artLong();}
			}
		}
		
	//若#mainLeft較短函數
	var artShortCase = 0;//讓css不重複執行
	var artShortCase2 = 0;//讓css不重複執行
	function artShort(){
		//下滑控制
		if($(window).scrollTop()>artH-$(window).height()){
			//判別footer還沒出現之前
			if($(window).scrollTop()<=asideH-$(window).height() && artShortCase==0){
				//將css調整成固定
				$("#mainLeftWrap").css({"position": "fixed","bottom": "0","top":""});artShortCase = 1;artShortCase2 = 0;}
			else if($(window).scrollTop()>asideH-$(window).height() && artShortCase2==0){
				//footer出現將css調整不要蓋到footer
				$("#mainLeftWrap").css({"position": "relative","bottom": "","top": asideH-artH});artShortCase2 = 1;artShortCase = 0;}
	    }
		//上滑控制
		else if($(window).scrollTop()<artH-$(window).height()){
			//將固定取消，回歸原本
			$("#mainLeftWrap").css({"position": "relative","bottom": "","top": "0"});artShortCase = 0;artShortCase2 = 0;
			} 
	}
	//若#mainLeft較長函數
	var artLongCase = 0;//讓css不重複執行
	var artLongCase2 = 0;//讓css不重複執行
	
	/*有廣告的時候只卡住廣告*/
  function artLongAd() {
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
	var adHeight = winHeight - $asideBottom.height() - $('nav').height();

    if (winScrollTop > asideH - winHeight - adHeight) {
      if (!artLongCase && winScrollTop <= artH - winHeight) {
        $("#asideWrap").css({
          position: 'fixed',
          bottom: adHeight,
          top: '',
        });

        artLongCase = true;
        artLongCase2 = false;
      } else if (!artLongCase2 && winScrollTop > artH - winHeight) {
        $("#asideWrap").css({
          position: 'relative',
          bottom: '',
          top: artH - asideH - adHeight,
        });

        artLongCase = false;
        artLongCase2 = true;
      }
    } else if (winScrollTop < asideH - winHeight - adHeight) {
      $("#asideWrap").css({
        position: 'relative',
        bottom: '',
        top: '0',
      });


      artLongCase = false;
      artLongCase2 = false;
    }
  }
	
	function artLong(){
		//下滑控制
		if($(window).scrollTop()>asideH-$(window).height()){
			//判別footer還沒出現之前
			if($(window).scrollTop()<=artH-$(window).height() && artLongCase==0){
				//將css調整成固定
				$("#asideWrap").css({"position": "fixed","bottom": "0","top":""});artLongCase = 1;artLongCase2 = 0;}
			else if($(window).scrollTop()>artH-$(window).height() && artLongCase2==0){
				//footer出現將css調整不要蓋到footer
				$("#asideWrap").css({"position": "relative","bottom": "","top": artH-asideH});artLongCase2 = 1;artLongCase = 0;}
	    }
		//上滑控制
		else if($(window).scrollTop()<asideH-$(window).height()){
			//將固定取消，回歸原本
			$("#asideWrap").css({"position": "relative","bottom": "","top": "0"});artLongCase = 0;artLongCase2 = 0;
			} 
	}
	
});
}) (jQuery);