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
        // $(".element").delay(9000).fadeIn(3000);
        hideElements();
    }



});

// ===================
//  SWITCH
// ===================

$(".toggle-switch").on("click", function (event) {
    $("body").toggleClass("bright");
    $("body").toggleClass("active");

});



// if (window.matchMedia("(max-width: 1200px)").matches) {
//     /* La largeur minimum de l'affichage est 600 px inclus */
//   } else {
//     /* L'affichage est inférieur à 600px de large */
//   }

const showWorkMenu = $('#work');
const home = $('#home');
const showAll = $('#all');
const showJs = $('#js');
const showPhp = $('#php');
const showWp = $('#wp');
const navigation = $('#navigation');
const mode = $('#switch');
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

function hideTechnologies() {
    showJs.hide();
    showPhp.hide();
    showWp.hide();

};

function showElements() {
    showAll.show();
    showWorkMenu.show();
    navigation.show();
    // mode.show();
    skills.show();
    footer.show();
    about.show();
}

function hideElements() {
    showWorkMenu.hide();
    showAll.hide();
    navigation.hide();
    // mode.hide();
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

// ==========================
// STORE MODE IN SESSION
// ==========================

// const toggleSwitch = $(".toggle-switch");
// const currentTheme = session.getItem('theme');
// const element = document.body;
// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     if (currentTheme === 'bright') {
//         toggleSwitch.checked = true;
//     }
//     if (session.theme === "bright") {
//         element.classList.toggle("bright")
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'active');
//         session.setItem('theme', 'active');
//         element.classList.toggle("bright")
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         session.setItem('theme', 'light');
//         element.classList.toggle("bright")
//     }
// }
// toggleSwitch.addEventListener('change', switchTheme, false);