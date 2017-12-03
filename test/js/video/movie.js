// JavaScript Document

//動態載入YT
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//影音館內頁影片
var player;
var currentTime;//目前播放秒數
var totalTime;//總共秒數
var YTgetTimer;//抓youtube播放時間的計時器
var YTplay = false;//是否正在播放影片
function onYouTubePlayerAPIReady() {
	//影音館內頁影片
	player = new YT.Player('player', {
		height: '410',
		width: '730',
		playerVars: {
			'autoplay': 0,
			'controls': 0,
			'showinfo':0,
			'rel':0,
			'modestbranding':0,
			'fs':0
             },
		/*影片Id*/
		videoId: 'jIdnH8rWjAs',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
             },

        });
      }

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	currentTime = player.getCurrentTime();//目前播放秒數
	totalTime = player.getDuration()-1;//總共秒數
	$(".videoControl .time .current").html(toHMS(currentTime));
	$(".videoControl .time .entire").html(toHMS(totalTime));
	}

// 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
	//正要播放
	if (event.data == 1) {
		//縮圖and按鈕隱藏
		$(".videoPlayer .play-button").hide();
		$(".videoPlayer .play-button").closest(".youtube-player").find(".youtube-thumb").hide();
		//播放and聲音按鈕亮起來
		$(".videoControl .playBtn").css({
			"background-image":"url(img/video/play_btn_hover.png)"});
		player.unMute();
		$(".videoControl .unMuteBtn").css({
			"background-image":"url(img/video/unmute_btn_hover.png)"});
		$(".videoControl .muteBtn").css({
			"background-image":"url(img/video/mute_btn.png)"});
		$( ".videoControl .volume" ).slider("value",player.getVolume());
		YTgetTimer = setInterval(getYTplay,1000);//設置youtube播放時間計時器
		YTplay = true;
		}
	//正要暫停或結束播放
	else if (event.data == 2 || event.data == 0) {
		clearInterval(YTgetTimer);
		$(".videoControl .playBtn").css({
			"background-image":"url(img/video/play_btn.png)"});
		$(".videoControl .unMuteBtn").css({
			"background-image":"url(img/video/unmute_btn.png)"});
		$(".videoControl .muteBtn").css({
			"background-image":"url(img/video/mute_btn.png)"});
		if(event.data == 0){
			$(".videoPlayer .play-button").show();
			$(".videoPlayer .play-button").closest(".youtube-player").find(".youtube-thumb").show();
			}
		YTplay = false;
		}
	}

//秒數轉換成 時：分：秒
function toHMS(obj) {
    var sec_num = obj; // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = Math.floor(sec_num - (hours * 3600) - (minutes * 60));

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
	if(hours=="00"){time = minutes+':'+seconds;}
    return time;
}

/*
-------------------------------------
設置每秒抓一次播放時間
-------------------------------------
*/
function getYTplay(){
	currentTime = player.getCurrentTime();//目前播放秒數
	$(".videoControl .time .current").html(toHMS(currentTime));
	$(".videoControl .progress .bar").slider("value",Math.floor(currentTime/totalTime*100));
	}

$(function(){
	var v = $(".videoPlayer .youtube-player");
	v.each(function(i,e){
		$(this).append('<img class="youtube-thumb" src="http://img.youtube.com/vi/' + $(this).data("id") + '/hqdefault.jpg"><div class="play-button"></div>');
		});
	$(".videoPlayer .play-button").click(function(){
		//若影片尚未播放
		if(YTplay==false){
			//縮圖and按鈕隱藏
			$(".videoPlayer .play-button").hide();
			$(".videoPlayer .play-button").closest(".youtube-player").find(".youtube-thumb").hide();
			player.playVideo();//播放影片
			}
		});
		
	/*
	-------------------------------------
	播放器控制
	-------------------------------------
	*/
	//音量滑桿
	$( ".videoControl .volume" ).slider({
		value: 100,
		orientation: "horizontal",
		range: "min",
		animate: true
		});
	//進度滑桿
	$( ".videoControl .progress .bar" ).slider({
		value: 0,
		orientation: "horizontal",
		range: "min",
		animate: false,
		});
	
	/*
	-------------------------------------
	靜音開關按鈕
	-------------------------------------
	*/
	$(".videoControl .muteBtn").click(function(){
		player.mute();
		$( ".videoControl .volume" ).slider("value",0);
		$(".videoControl .unMuteBtn").css({
			"background-image":"url(img/video/unmute_btn.png)"});
		});
	$(".videoControl .unMuteBtn").click(function(){
		player.unMute();
		$( ".videoControl .volume" ).slider("value",100);
		$(".videoControl .muteBtn").css({
			"background-image":"url(img/video/mute_btn.png)"});
		});
	
	/*
	-------------------------------------
	播放器hover
	-------------------------------------
	*/
	$(".videoControl .playBtn").hover(function(){
		$(this).css({
			"background-image":"url(img/video/play_btn_hover.png)"});
		},function(){
			if(YTplay==false){
				$(this).css({
					"background-image":"url(img/video/play_btn.png)"});
				}
			});
	$(".videoControl .muteBtn").hover(function(){
		$(this).css({
			"background-image":"url(img/video/mute_btn_hover.png)"});
		},function(){
			if(player.isMuted()==false){
				$(this).css({
					"background-image":"url(img/video/mute_btn.png)"});
				}
			});
	$(".videoControl .unMuteBtn").css({"background-image":"url(img/video/unmute_btn_hover.png)"});
	$(".videoControl .unMuteBtn").hover(function(){
		$(this).css({
			"background-image":"url(img/video/unmute_btn_hover.png)"});
		},function(){
			if(player.isMuted()==true){
				$(this).css({
					"background-image":"url(img/video/unmute_btn.png)"});
				}
			});
	
	/*
	-------------------------------------
	大小聲滑桿
	-------------------------------------
	*/
	$(".videoControl .volume").on("click mousemove",function () {
		/*改變youtube聲音*/
		player.setVolume($(this).slider("value"));
		});
	
	/*
	-------------------------------------
	自制播放按鈕
	-------------------------------------
	*/
	$(".videoControl .playBtn").click(function(){
		//若影片尚未播放
		if(YTplay==false){
			//縮圖and按鈕隱藏
			$(".videoPlayer .play-button").hide();
			$(".videoPlayer .play-button").closest(".youtube-player").find(".youtube-thumb").hide();
			player.playVideo();//播放影片
			}
		//若影片播放中
		else{
			player.pauseVideo();
			}
		});
		
	
	/*
	-------------------------------------
	進度滑桿
	-------------------------------------
	*/
	$(".videoControl .progress .bar").mousedown(function(){
		var goToTime = Math.floor($(this).slider("value")*totalTime/100);
		player.seekTo(goToTime, false);
		});
	$(".videoControl .progress .bar").mouseup(function(){
		var goToTime = Math.floor($(this).slider("value")*totalTime/100);
		player.seekTo(goToTime, true);
		});

});
