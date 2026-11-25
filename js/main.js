$(document).ready(function() {
	$('.nav-hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.header-nav').toggleClass('is-active')
	})

	var $video = $('.splash-bg');
	var $poster = $('.splash-poster');

	if ($(window).width() <= 640) {
		$video.hide();
		$poster.addClass('is-active');
	}

	$video.on('error', function() {
		$video.hide();
		$poster.addClass('is-active');
	});
});
