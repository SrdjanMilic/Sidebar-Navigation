const openSidebar = document.querySelector('.open-sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const sideBar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function toggleSideBar() {
  sideBar.classList.toggle('active');
  overlay.classList.toggle('active');
  closeSidebar.classList.toggle('animation');
}

openSidebar.addEventListener('click', toggleSideBar);
closeSidebar.addEventListener('click', toggleSideBar);

overlay.addEventListener('click', () => {
  if (sideBar.classList.contains('active')) toggleSideBar();
});
