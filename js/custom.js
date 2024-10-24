(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal", 
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 500, 
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3000, 
				autoplayButtonOutput: false
			});
		}
	};

	// Initialize the slider
	tinyslider();
})();
