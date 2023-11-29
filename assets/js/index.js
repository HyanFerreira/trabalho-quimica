const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
});
