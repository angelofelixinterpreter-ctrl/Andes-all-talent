const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

if (menu && links) {
  menu.onclick = () => links.classList.toggle('open');

  links.querySelectorAll('a').forEach(a => {
    a.onclick = () => links.classList.remove('open');
  });
}

document.querySelectorAll('[data-year]').forEach(e => {
  e.textContent = new Date().getFullYear();
});
