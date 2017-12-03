// JavaScript Document
(function($) {
$(function(){
	/*
 * -------------------------------------
 * 設定 youtube 寬高
 * -------------------------------------
 */

  var $flDom = $("#articleMain");
  
  if ($flDom.length){
	  
    // Find all YouTube videos
    var $allVideos = $("iframe[src^='https://www.youtube.com']");
  
    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
	  $(this).data('aspectRatio', this.height / this.width)
      .removeAttr('height')
      .removeAttr('width');
    });
  
    // When the window is resized
    $(window).resize(function() {
	  var newWidth = $flDom.width(); //要縮成的寬度
	
	  // Resize all videos according to their own aspect ratio
	  $allVideos.each(function() {
	    var $el = $(this);
	    $el
	    .width(newWidth)
	    .height(newWidth * $el.data('aspectRatio'));
	  });
	  // Kick off one resize to fix all videos on page load
    }).resize();
	  
  }

	/*
	-------------------------------------
	回至文章結尾處
	-------------------------------------
	*/
	$(".articleBack").click(function(){
		var articleP = $("article").offset().top+$("article").height()-$(window).height();
		$('html,body').animate({scrollTop: articleP},1000);
	});
	
	/*
	-------------------------------------
	社交互動按鈕 #socialBox
	-------------------------------------
	*/
	$("#socialBox ul.cover li").hover(function(){
		$(this).hide( "slide", { direction: "left" }, "fast" );
		},function(){});
	$("#socialBox ul.plugin li").hover(function(){},function(){
		$("#socialBox ul.cover li").show( "slide", { direction: "left" }, "fast" );
		});
	$("#socialBox").hover(function(){},function(){
		$("#socialBox ul.cover li").show( "slide", { direction: "left" }, "fast" );
		});
	//區塊垂直置中
	$("#socialBox").css({
		"top":(($(window).height()-$("#socialBox").height())/2)+"px"
		});
	//當footer出現後，不要插進去
	var socialP1 = 0;
	$(window).scroll(function(){
		if($(window).scrollTop()>$("footer").offset().top-($(window).height()+$("#socialBox").height())/2 && socialP1==0){
			/*between main and footer out*/
			$("#socialBox").css({
				"position":"absolute",
				"top": $("footer").offset().top - $("#socialBox").height()
				});
			socialP1 = 1;
				}
		else if($(window).scrollTop()<$("footer").offset().top-($(window).height()+$("#socialBox").height())/2 && socialP1==1){
			/*between main and footer out*/
			$("#socialBox").css({
				"position":"fixed",
				"top": ($(window).height()-$("#socialBox").height())/2
				});
			socialP1 = 0;
				}
		});
	
	/*
	-------------------------------------
	上一篇下一篇文章
	-------------------------------------
	*/
	//設定位置
	function articleNextPrevBtn(){
		$("#articleNextBtn").css({
			"top":(($(window).height()-$("#articleNextBtn").height())/2)+"px",
			"left":($("#mainWrap").offset().left+1050+20)+"px"
			});
		$("#articleNext").css({
			"top":(($(window).height()-$("#articleNextBtn").height())/2)+"px",
			"left":($("#mainWrap").offset().left+1050+20-$("#articleNext a").width()+$("#articleNextBtn").width())+"px"
			});
		$("#articlePrevBtn").css({
			"top":(($(window).height()-$("#articlePrevBtn").height())/2)+"px",
			"left":($("#mainWrap").offset().left-20-$("#articlePrevBtn").width())+"px"
			});
		$("#articlePrev").css({
			"top":(($(window).height()-$("#articlePrevBtn").height())/2)+"px",
			"left":($("#mainWrap").offset().left-20-$("#articlePrevBtn").width())+"px"
			});
		}
	$(window).resize(articleNextPrevBtn);
	articleNextPrevBtn();	
		
	//設定滑過
	$("#articleNextBtn").hover(function(){
		$("#articleNext").show();
		},function(){});
	$("#articleNext").hover(function(){},function(){
		$("#articleNext").hide();
		});
	$("#articlePrevBtn").hover(function(){
		$("#articlePrev").show();
		},function(){});
	$("#articlePrev").hover(function(){},function(){
		$("#articlePrev").hide();
		});
	
	/*
	-------------------------------------
	頁尾廣告 footAd
	-------------------------------------
	*/
	var $window = $(window);
	var $footAd = $(".footerAd");
	var $footAdClose = $(".footerAd .close");
	var lastScrollTop = 0;//判別是向上滑還是向下
	var closeAd = false;//判別單一頁面關掉廣告與否
	
	$footAdClose.click(function(){
		$footAd.hide("slide",{direction: "down"},500);
	});
	$window.scroll(function(){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			// downscroll code
			if(!closeAd && $window.scrollTop()>($("footer").offset().top-$window.height())){
				$footAd.show("slide",{direction: "down"},500);
				closeAd = true;
			}
		} else {
			// upscroll code
		}
		lastScrollTop = st;
	});
	
	/*
	-------------------------------------
	蓋檯
	-------------------------------------
	*/
	//動態插入
	$("#cover").append('<a id="dfp_1050_700_cover" href="dfp_1050.html"></a>');
	$("#cover").append('<a id="allow18" href="#content18"></a>');
	$("#cover").append('<a id="idle" href="idle.html"></a>');
	$("#cover").append('<a id="fbPageLikeBtn" href="#fbPageLike"></a>');
	
	//設置跳窗
	$("#dfp_1050_700_cover").colorbox({
				iframe: true,
				width: 1050,
				height: 700,
				scrolling: false,
				fixed: true,
				overlayClose: false,
				onComplete: function(){
					$("#cboxClose").css({
						"background-color":"rgba(255,255,255,0.7)"});
					$("#colorbox").css({
						"box-shadow":"-5px 15px 12px -12px rgba(0,0,0,0)"});
					if($(window).width()<=1024){/*判別1024螢幕，關閉按鈕移動位置*/
						$("#cboxClose").css({"top": 0,"right": 36});
						}
					else{
						$("#cboxClose").css({"top": 0,"right": 0});
						}
					},
				onClosed: function(){
					$("#cboxClose").css({
						"background-color":"",
						"top": 10,
						"right": 10
						});
					$("#colorbox").css({
						"box-shadow":"-5px 15px 12px -12px rgba(0,0,0,0.75)"});
					$("#allow18").trigger("click");
					}
				});
	$("#allow18").colorbox({
				inline: true,
				width: 480,
				height: 250,
				scrolling: false,
				fixed: true,
				closeButton: false,
				overlayClose: false,
				onClosed: function(){$("#idle").trigger("click");}
				});
	$("#idle").colorbox({
				iframe: true,
				width: 1088,
				height: 623,
				scrolling: false,
				fixed: true,
				overlayClose: true
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
	$("#dfp_1050_700_cover").trigger("click");
	
	//18禁自制關閉按鈕
	$("#content18 ul.btn li:first-child").click(function(){$.colorbox.close();});
	$("#content18 ul.btn li:last-child").click(function(){history.back();});
	
	//判別按讚出現時機
	/*var fbShareShow = false; //判斷出現一次就好
	$(window).scroll(function(){
		if($(window).scrollTop()>($("#fbShare").offset().top-$(window).height()/3) && fbShareShow == false){
			$("#fbPageLikeBtn").trigger("click");
			fbShareShow = true;
			}
		});*/
})
}) (jQuery);