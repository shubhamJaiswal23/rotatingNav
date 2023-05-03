const container = document.querySelector('.container');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

function openMenu() {
  container.classList.add('show-nav');
}

function closeMenu() {
  container.classList.remove('show-nav');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
