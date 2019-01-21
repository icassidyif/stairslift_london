
var page = document.querySelector('.page');
var pageWrapper = page.querySelector('.wrapper');
var h1 = page.offsetHeight;
var h2 = pageWrapper.offsetHeight;

// console.log( h1, h2)
if(h1 < h2){
  page.classList.add('test')
}