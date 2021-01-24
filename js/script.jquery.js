$(document).ready(function () {
    searchParams = new URLSearchParams(window.location.search);
    searchParams.has('visited'); // true
    param = searchParams.get('visited');
    // console.log({param});
    if (param === "true") {
        goIn();
        hideTechnologies();
    } else {
        $("#B").fadeIn(1400);
        $("#O").delay(300).fadeIn(1400);
        $("#N").delay(600).fadeIn(1400);
        $("#J").delay(900).fadeIn(1400);
        $("#Oo").delay(1200).fadeIn(1400);
        $("#U").delay(1500).fadeIn(1400);
        $("#R").delay(1800).fadeIn(1400);
        $(".intro-2").delay(2600).fadeIn(3000);
        hideElements();
    }
});

const showWorkMenu = $('#work');
const home = $('#home');
const showAll = $('#all');
const showJs = $('#js');
const showPhp = $('#php');
const showWp = $('#wp');
const navigation = $('#navigation');
let skills = $('#skills');
let about = $('#about')
const footer = $('#footer');

const enter = $('#enter');
const navAll = $('#nav-all');
const navJs = $('#nav-js');
const navPhp = $('#nav-php');
const navWp = $('#nav-wp');

function goIn() {
    home.hide();
    showElements();
};

// function goIn() {
//     home.hide();
//     showAll.show();
//     showWorkMenu.show();
//     $(document).ready(function () {

//         var skillsFadeIn = skills.offset().top;
//         var aboutFadeIn = about.offset().top;

//         $(document).scroll(function () {
//             if (skillsFadeIn && aboutFadeIn <= $(document).scrollTop()) {
//                 skills.removeClass("hidden").fadeIn();
//                 about.removeClass("hidden").fadeIn();
//             }
//         });

//     });

// };

function hideTechnologies() {
    showJs.hide();
    showPhp.hide();
    showWp.hide();

};

function showElements() {
    showAll.show();
    showWorkMenu.show();
    navigation.show();
    skills.show();
    footer.show();
    about.show();
}

function hideElements() {
    showWorkMenu.hide();
    showAll.hide();
    navigation.hide();
    about.hide();
    skills.hide();
    footer.hide();
    hideTechnologies();
};

enter.click(() => {
    goIn();
});

navAll.click(() => {
    showAll.show();
    hideTechnologies();
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

navWp.click(() => {
    showWp.show();
    showPhp.hide();
    showJs.hide();
    showAll.hide();
});

// ===================
//  SCROLL AUTO
// ===================

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    var elem = $(href);
    if (elem.length) {
        var elemTop = elem.first().offset().top;
        $('html,body').animate({
            scrollTop: elemTop
        }, "1000");
    }
});