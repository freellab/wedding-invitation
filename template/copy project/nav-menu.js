let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // scroll down → hide nav
    nav.classList.add('hidden');
  } else {
    // scroll up → show nav
    nav.classList.remove('hidden');
  }

  lastScroll = currentScroll;
});


