 
// HEADER TOP FIXED //
window.onscroll = () => {
    const header = document.querySelector('.header__top');
    const Y = window.scrollY;

    if (Y > 600) {
        header.classList.add('header__top-visible');
    } else if (Y < 600) {
        header.classList.remove('header__top-visible');
    }
};


// BURGER MENU ACTIVE //
const burger = document.querySelector('.header__burger');
const elem = document.querySelector('.burger__item');
const menu = document.querySelector('.header__top-nav');
const body = document.querySelector('body');

function openMenu() {
    burger.classList.toggle('active');
    elem.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
}

function closeMenu() {
    burger.classList.remove('active');
    elem.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
}

burger.addEventListener('click', function() {
    openMenu();
});

// SMOOTH SCROLL
const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockId = anchor.getAttribute('href').substr(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}

new WOW().init();


