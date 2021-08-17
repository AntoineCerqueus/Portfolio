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

    // ===================
    //  SWITCH
    // ===================

    switchButton.on("click", function (event) {
        $("body").toggleClass("bright");
        $("body").toggleClass("active");
        // switchButton.toggleClass('active');


        // ==========================
        // STORE MODE IN LOCALSTORAGE
        // ==========================

        if ($(this).is(":checked")) {
            localStorage.setItem("checked", "yes");
        } else {
            localStorage.setItem("checked", "no");
        }

        if (document.body.classList.contains('bright')) { //when the body has the class 'light' currently
            localStorage.setItem('lightMode', 'enabled'); //store this data if light mode is on
        } else {
            localStorage.setItem('lightMode', 'disabled'); //store this data if light mode is off
        }

    });

    let checkedPosition = localStorage.getItem('checked');

    if (checkedPosition == "yes") {
        switchButton.prop('checked', true);
    }
    else if(checkedPosition == "no"){
        switchButton.prop('checked', false);
    }

    if (localStorage.getItem('lightMode') == 'enabled') {
        $("body").toggleClass("bright");
        $("body").toggleClass("active");
        // switchButton.toggleClass('active');
    }
});



const switchButton = $(".toggle-switch");





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