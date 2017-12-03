(function ($) {
	"use strict";
	var scene = $('.parallax-hover').get(0);
	var parallaxInstance = new Parallax(scene, {
		relativeInput: true,
		hoverOnly: true,
	});
})(jQuery);
