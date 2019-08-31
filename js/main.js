AOS.init();

// $(function() {
// 	$(".loading-wrapper").fadeOut(5000);
// });

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});

var myname = document.getElementById('myname');
var typewriter = new Typewriter(myname, {
	strings: ['Hello', "I'm Sam Burkett", 'I love coding!'],
	autoStart: true,
	loop: true,
});