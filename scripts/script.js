$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('.content-dummy');
	var offset = startchange.offset();
		if (startchange.length) {
			
	$(document).scroll(function() {
		scroll_start = $(this).scrollTop();
		if (scroll_start > offset.top) {
			$('.navbar-default').css('background-color', 'white');
			$('.navbar-brand').css('color', 'black');
			$('.nav-link').css('color', 'black');
			$('.logo').attr('src','images/logo_bl.png');
		}
			else {
				$('.navbar-default').css('background', 'transparent');
				$('.navbar-brand').css('color', 'white');
				$('.nav-link').css('color', 'white');
				$('.logo').attr('src','images/logo.png');
			}
		});
	}
});