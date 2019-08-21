$(function() {

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll() {

		if(scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}

	// scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let blockId = $(this).data('scroll');
		let blockOffset = $(blockId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 1200);
	})

	// NavToggle
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	})


	//https://kenwheeler.github.io/slick/
	// Choose
	let slider = $("#chooseSlider");

	slider.slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  fade: false,
	  arrows: true,
	  dots: true
	});


});