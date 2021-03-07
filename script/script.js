const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu nav');
const close = document.querySelector('.close');

menuBtn.addEventListener('click', function(){
menu.style.transform = 'translateX(0%)';
});
close.addEventListener('click', function(){
    menu.style.transform = 'translateX(-100%)';
    });