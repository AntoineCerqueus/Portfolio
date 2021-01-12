const work = document.getElementById('work');
const showAll = document.getElementById('all');
const showJs = document.getElementById('js');
const showPhp = document.getElementById('php');
const showWp = document.getElementById('wp');

let enter = document.getElementById('enter');
let navAll = document.getElementById('nav-all');
let navJs = document.getElementById('nav-js');
let navPhp = document.getElementById('nav-php');
let navWp = document.getElementById('nav-wp');

window.onload = function () {
    // work.classList.add('hidden');
    // showAll.classList.add('hidden');
    showJs.classList.add('hidden');
    showPhp.classList.add('hidden');
    showWp.classList.add('hidden');
};


navAll.addEventListener('click', () => {
    showAll.classList.remove('hidden');
    showJs.classList.add('hidden');
    showPhp.classList.add('hidden');
    showWp.classList.add('hidden');
});

navJs.addEventListener('click', () => {
    showJs.classList.remove('hidden');
    showAll.classList.add('hidden');
    showPhp.classList.add('hidden');
    showWp.classList.add('hidden');
});

navPhp.addEventListener('click', () => {
    showPhp.classList.remove('hidden');
    showJs.classList.add('hidden');
    showAll.classList.add('hidden');
    showWp.classList.add('hidden');
});

navWp.addEventListener('click', () => {
    showWp.classList.remove('hidden');
    showPhp.classList.add('hidden');
    showJs.classList.add('hidden');
    showAll.classList.add('hidden');
});