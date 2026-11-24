$(document).ready(function() {
	$('.nav-hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.header-nav').toggleClass('is-active')
	})

	if ($(window).width() > 640) {
		$('.splash-bg').attr('src','/img/video_bg.m4v');
	}
	else {
		$('.splash-bg').hide();
		$('.splash-poster').toggleClass('is-active');
	}
});