$(".showmenu").bind( "click", function() {
	$('.menusection').toggleClass('show');
});

$(".menulink").bind( "click", function() {
	$('.menusection').toggleClass('show');
});

$(document).click(function(e){
	if (!$(".menusection").is(e.target) && $(".menusection").has(e.target).length === 0) {
		// Clicked outside, close menu
		$(".menusection").removeClass('show');
	}
});