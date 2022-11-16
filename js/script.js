$('.reviews-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,        
    arrows: false,
    dots: true,

});
let burgerMenu = document.querySelector('.menu-burger');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('__open');
})