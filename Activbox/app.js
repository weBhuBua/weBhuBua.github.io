$(function() {

	// Fixed header
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	})


	// Smooth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let blockId = $(this).data('scroll');
		let blockOffset = $(blockId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: blockOffset -59
		}, 1500);

		console.log(blockOffset);
	});


	// Nav Toggle
	let nav=$("#nav");
	let navToggle = $("#navToggle");

	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show")
	})



	// Reviews / : https://kenwheeler.github.io/slick/

	let slider = $("#reviewsSlider");

		slider.slick({
			  infinite: true,
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  fade: true,
			  arrows: false
		});

	});