let toggleBtn = document.querySelector('.page-header__toggle');
let mainNav = document.querySelector('.main-nav');

toggleBtn.addEventListener('click', () => {
  mainNav.classList.toggle('.closed');
});
