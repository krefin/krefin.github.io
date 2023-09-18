const menu = document.querySelector('.menu-toggle');
const menuWrapper = document.querySelector('.menu-wrapper');
menu.addEventListener('click', function(){
    menu.classList.toggle('bx-x');
    menuWrapper.classList.toggle('active');
});