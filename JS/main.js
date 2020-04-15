var menuBtn, mainMenu;

menuBtn = document.querySelector('.menu-btn');
mainMenu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', function(){
  mainMenu.classList.toggle('show');
});


 /* document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show')); */ 

