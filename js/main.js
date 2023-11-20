var burger = document.querySelector('.burger')
var menuburger = document.querySelector('.menuburger')

var toggleMenu = function toggleMenu() {
  menuburger.classList.toggle('is-active');
}

burger.addEventListener('click', toggleMenu);