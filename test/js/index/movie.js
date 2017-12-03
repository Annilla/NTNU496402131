// JavaScript Document
(function($) {
$(function(){
	var movieYT = $(".movie .youtube-player");
	movieYT.each(function(i,e){
		$(this).append('<img class="youtube-thumb" src="http://img.youtube.com/vi/' + $(this).data("id") + '/hqdefault.jpg"><div class="play-button"></div>');
		});
	$(".movie .play-button").click(function(){
		$(this).hide();
		$(".movie .title").hide();
		$(this).closest(".youtube-player").find(".youtube-thumb").hide();
		player.playVideo();
		});
});
}) (jQuery);


//動態載入
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		height: '405',
		width: '720',
		playerVars: {
			'autoplay': 0,
			'controls': 2,
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
	$(".movie .play-button").trigger("click");//觸發點擊播放
	player.mute();//靜音
}

// 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
	//正要結束播放
	if (event.data == 0) {
		$(".movie .play-button").show();
		$(".movie .play-button").closest(".youtube-player").find(".youtube-thumb").show();
		$(".movie .title").show();
		}
	}
