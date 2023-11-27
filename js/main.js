var burger = document.querySelector('.burger')
var menuburger = document.querySelector('.menuburger')

var toggleMenu = function toggleMenu() {
  menuburger.classList.toggle('is-active');
}

var closeMenu = function closeMenu() {
  var width = window.innerWidth
  if(width > 768){
    menuburger.classList.remove('is-active');
  }
}

burger.addEventListener('click', toggleMenu);

window.addEventListener('resize', closeMenu)