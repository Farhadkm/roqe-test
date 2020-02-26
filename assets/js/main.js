
(function ($) {

	var $window = $(window),
		$banner = $('#banner'),
		$body = $('body');


	window.addEventListener("scroll", function () {
		if (window.scrollY < 500) {
			$('#header').addClass('header-top');
		}
		else {
			$('#header').removeClass('header-top');
		}
	}, false);

	$('#controlR').click(function () {
		event.preventDefault();
		$('#content').animate({
			marginLeft: "-=400px"
		}, "fast");
	});

	$('#controlL').click(function () {
		event.preventDefault();
		$('#content').animate({
			marginLeft: "+=400px"
		}, "fast");
	});



	// Breakpoints.
	breakpoints({
		default: ['1681px', null],
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			target: $body,
			visibleClass: 'is-menu-visible',
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right'
		});

})(jQuery);