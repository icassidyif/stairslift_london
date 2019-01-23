
var page = document.querySelector('.page');
var pageWrapper = page.querySelector('.wrapper');

var menu = document.querySelector('.main-nav');
var menuOpener = document.querySelector('.main-nav__opener');

console.log(menuOpener);
// console.log( h1, h2)


menuOpener.addEventListener('click',function(){
  menu.classList.toggle('is-active');
})