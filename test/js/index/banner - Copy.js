// JavaScript Document
jQuery(document).ready(function ($) {
	var options = {
		$AutoPlay: true,
		$AutoPlayInterval: 5000,//Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing
		$PauseOnHover: 1,//[Optional] Whether to pause when mouse over if a slideshow is auto playing, default value is false
		$ArrowKeyNavigation: true,//Allows arrow key to navigate or not
        $SlideWidth: 1050,//[Optional] Width of every slide in pixels, the default is width of 'slides' container
        $SlideHeight: 480,//[Optional] Height of every slide in pixels, the default is width of 'slides' container
		$SlideSpacing: 20,//Space between each slide in pixels
        $DisplayPieces: 2,//Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: ($(window).width()-1050)/2,
		//The offset position to park slide (this options applys only when slideshow disabled).
		$ArrowNavigatorOptions: {//[Optional] Options to specify and enable arrow navigator or not
			$Class: $JssorArrowNavigator$,//[Requried] Class to create arrow navigator instance
			$ChanceToShow: 2,//[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,//[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
			$Steps: 1//[Optional] Steps to go for each navigation request, default value is 1
				}
            };
	//var jssor_slider1 = new $JssorSlider$("slider1_container", options);
	//設定banner寬度
	$(".slider1_container").width($(window).width());
	$(".slides").width($(window).width());
});