//display menu list
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
menu.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

//create-services-dropdowns
const dropdowns = document.querySelectorAll('.service-dropdowns li');
dropdowns.forEach(dropdown => {
  const instance = new ServiceDropdown(dropdown);
  instance.init();
});