const header = document.getElementById('header');
const navLink = document.getElementById('navLink');
const menu = document.getElementById('menu');
 const xBar = document.getElementById('xbar');
function showMenu() {
  navLink.classList.toggle("active");
  if (menu.classList.contains('fa-bars')){
    menu.classList.replace('fa-bars', 'fa-x');
  }
  else{
    menu.classList.replace('fa-x', 'fa-bars');
  }

}
menu.addEventListener('click', showMenu);

