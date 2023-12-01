$(function () {

})

const right_side_menu = document.querySelector('.rightSideMenu');
const close_right_side_menu = document.querySelector('.rightSideMenu');
const open_right_side_menu = document.querySelector('.header__btn');




close_right_side_menu.addEventListener('click', () => {
    right_side_menu.classList.add('rightSideMenu__hide');
})

open_right_side_menu.addEventListener('click', () => {
    right_side_menu.classList.remove('hide');
    right_side_menu.classList.remove('rightSideMenu__hide');
})



const swiper = new Swiper('.top__slider', {
    slideClass: 'top__slider-item',
    wrapperClass: 'top__slider-wrapper',
});
