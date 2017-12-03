// JavaScript Document
(function($) {
jQuery(document).ready(function ($) {
	var options1 = {
		$AutoPlay: true,
		$AutoPlayInterval: 5000,//Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing
		$PauseOnHover: 1,//[Optional] Whether to pause when mouse over if a slideshow is auto playing, default value is false
		$ArrowKeyNavigation: true,//Allows arrow key to navigate or not
        $SlideWidth: 1050,//[Optional] Width of every slide in pixels, the default is width of 'slides' container
        //$SlideHeight: 480,//[Optional] Height of every slide in pixels, the default is width of 'slides' container
		$SlideSpacing: 0,//Space between each slide in pixels
        $DisplayPieces: 1,//Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0,
		//The offset position to park slide (this options applys only when slideshow disabled).
		$ArrowNavigatorOptions: {//[Optional] Options to specify and enable arrow navigator or not
			$Class: $JssorArrowNavigator$,//[Requried] Class to create arrow navigator instance
			$ChanceToShow: 2,//[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,//[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
			$Steps: 1//[Optional] Steps to go for each navigation request, default value is 1
				},
		$BulletNavigatorOptions: {//[Optional] Options to specify and enable navigator or not
			$Class: $JssorBulletNavigator$,//[Required] Class to create navigator instance
			$ChanceToShow: 2,//[Required] 0 Never, 1 Mouse Over, 2 Always
			$AutoCenter: 1,//[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
			$Steps: 1,//[Optional] Steps to go for each navigation request, default value is 1
			$Lanes: 1,//[Optional] Specify lanes to arrange items, default value is 1
			$SpacingX: 20,//[Optional] Horizontal space between each item in pixel, default value is 0
			$SpacingY: 0,//[Optional] Vertical space between each item in pixel, default value is 0
			$Orientation: 1//[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                },
            };
	var jssor_slider1 = new $JssorSlider$("slider1_container", options1);
});
}) (jQuery);