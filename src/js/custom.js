
$('.slider__inner').slick({
	dots: true,
	infinite: true,
	speed: 900,
	slidesToShow: 1,
	adaptiveHeight: true
});
$('#mobile-menu').on('click',function () {
	$('#header-nav').toggleClass('open');
});
$('.deeper').on('click',function (event) {
	var el = event.target;
	if ($(el).hasClass('deeper') ||$(el).parent().hasClass('deeper')){
		$(this).toggleClass('open');
		$('.deepest').each(function () {
			$(this).removeClass('open');
		})
	}

});
$('.deepest').on('click',function () {
	if ($(this).hasClass('open')){
		$(this).removeClass('open');
	}else{
		$('.deepest').each(function () {
			$(this).removeClass('open');
		});
		$(this).addClass('open');
	}
});
$('#mobile-search').on('click',function () {
	addShadow();
	$('.header__search').addClass('open');
	$('.header__search').append('<span class ="close" onclick="removeShadow()">закрыть</span>')
	$('.header__search').show('slow');
});


function addShadow() {
	$(document.body).append('<div class ="shadow" onclick="removeShadow()"></div>')
}
function removeShadow() {
    $('.header__search').hide('fast');
	$('.header__search').removeClass('open');
	$('.shadow').detach();
}