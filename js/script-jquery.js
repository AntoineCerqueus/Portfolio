$(document).ready(function () {
    searchParams = new URLSearchParams(window.location.search);
    searchParams.has('visited'); // true
    param = searchParams.get('visited');
    // console.log({param});
    if (param === "true") {
        goIn();
        hideTechnologies();
    } else {
        $("#B").fadeIn(3000);
        $("#O").fadeIn(3000);
        $("#N").fadeIn(3000);
        $("#J").fadeIn(3000);
        $("#Oo").fadeIn(3000);
        $("#U").fadeIn(3000);
        $("#R").fadeIn(3000);
        $("#intro-2-title").delay(2000).fadeIn(2000);
        $("#intro-2-pres").delay(4000).fadeIn(2000);
        enter.delay(10000).fadeIn(2000);
        element.delay(10000).fadeIn(2000);
        hideElements();
    }

    // ===================
    //  SWITCH
    // ===================

    switchButton.on("click", function (event) {
        $("body").toggleClass("bright");
        $("body").toggleClass("active");

        // ==========================
        // STORE MODE IN LOCALSTORAGE
        // ==========================

        if ($(this).is(":checked")) {
            localStorage.setItem("checked", "yes");
        } else {
            localStorage.setItem("checked", "no");
        }

        if (document.body.classList.contains('bright')) {
            $(".cv").prop("href", "img/cv_antoine_cerqueus_noir_et_blanc.pdf");
            localStorage.setItem('lightMode', 'enabled');
        } else {
            localStorage.setItem('lightMode', 'disabled');
        }

    });

    let checkedPosition = localStorage.getItem('checked');

    if (checkedPosition == "yes") {
        switchButton.prop('checked', true);
    } else if (checkedPosition == "no") {
        switchButton.prop('checked', false);
    }

    if (localStorage.getItem('lightMode') == 'enabled') {
        $("body").toggleClass("bright");
        $("body").toggleClass("active");
    }

    if (window.location.href.indexOf("canyoning") > -1 || window.location.href.indexOf("ecommerce") > -1 || window.location.href.indexOf("wp_theme") > -1 || window.location.href.indexOf("sea_battle") > -1 || window.location.href.indexOf("breaking_bad_api") > -1 || window.location.href.indexOf("prise_de_contact") > -1 || window.location.href.indexOf("market_place") > -1) {
        element.show();
    }

});

const switchButton = $(".toggle-switch");
const element = $(".element");

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
    element.show();
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
