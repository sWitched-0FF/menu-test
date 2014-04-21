$(document).ready(function(){
	$('.mainnav a').click(function(event){
		event.stopPropagation();
		$(this).siblings().slideToggle();
	});
});
$(document).click(function(){
	if($(window).width() > 600){
		$('.mainnav ul ul').slideUp();
	}
});