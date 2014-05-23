$(document).ready(function(){
	$('.station-links a').bind('click', function( event ){
		event.preventDefault();
		var audio = document.querySelectorAll('.player')[0];
		audio.src = event.currentTarget.href;
		audio.play();
	});
});
