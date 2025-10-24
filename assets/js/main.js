const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.primary-navigation');
const yearEl = document.getElementById('year');

if (navToggle && navigation) {
  navToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  const links = document.querySelectorAll('.primary-navigation a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
