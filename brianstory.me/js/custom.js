//function for navbar
$(document).ready(function() {
	var $nav = $('.nav');
	var $nav2 = $('.link')
	$nav.onePageNav();
	$('.navbar').css({ 'opacity' : 0.8 });  

	$nav2.on('click', 'a', function(e){
		var $link = $('.link a').attr('href');

		$('.nav a').each(function(){
			var $val = $(this).attr('href');
			if($val == $link){
				$(this).trigger('click');
			}
		});

		e.preventDefault();
	});

});

// Initialize font
WebFontConfig = { fontdeck: { id: '35088' } };
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();


//funtion for knob for skills
$(function() {
	$('.dial').knob({
		'bgColor':'#2b2b2b',
		'readOnly':true,
		'angleOffset':-125
	});
});

//function for navbar opacity
$(window).scroll(function () {
	if ($(this).scrollTop() > 80) {
		$('.navbar').css({ 'opacity' : 1.0 });  
	}
	if ($(this).scrollTop() < 80) {
		$('.navbar').css({ 'opacity' : 0.8 });  
	}                 
});

// Initialize mixitup
$(function(){
	$('#Grid').mixitup();
});

// Load fancyBox
$(document).ready(function() {

	/* This is basic - uses default settings */
	$("a.inline").fancybox({
		'hideOnContentClick': true,
		'autoScale'         : false,
		'width'             : 1000, 
	});

	
});