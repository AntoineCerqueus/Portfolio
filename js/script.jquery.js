// Si déja cliqué => innerhtml "REDECOUVRIR sur le retour sur l'accueil"


const work = $('#work');
const showAll = $('#all');
const showJs = $('#js');
const showPhp = $('#php');
const showWp = $('#wp');

const enter = $('#enter');
const navAll = $('#nav-all');
const navJs = $('#nav-js');
const navPhp = $('#nav-php');
const navWp = $('#nav-wp');

window.onload = function () {
    work.hide();
    showAll.hide();
    showJs.hide();
    showPhp.hide();
    showWp.hide();
};


navAll.click(() => {
    showAll.show();
    showJs.hide();
    showPhp.hide();
    showWp.hide();
});

navJs.click(() => {
    showJs.show();
    showAll.hide();
    showPhp.hide();
    showWp.hide();
});

navPhp.click(() => {
    showPhp.show();
    showJs.hide();
    showAll.hide();
    showWp.hide();
});

navWp.click( () => {
    showWp.classList.show();
    showPhp.classList.hide();
    showJs.classList.hide();
    showAll.classList.hide();
});

enter.click(() => {
    showAll.show();
    work.show();
});

// ===================
//  SCROLL AUTO
// ===================

$('a[href^="#"]').on('click', function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	var elem = $(href);
	if( elem.length ){
		var elemTop = elem.first().offset().top;
		$('html,body').animate({
			scrollTop:elemTop
		}, "1000");
	}
});
