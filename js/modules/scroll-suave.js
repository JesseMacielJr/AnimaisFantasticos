export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // Forma alternativa
    // const dist = section.offsetTop
    // window.scrollTo({
    //     top: dist,
    //     behavior: 'smooth',
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
