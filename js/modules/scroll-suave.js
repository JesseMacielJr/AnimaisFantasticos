export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // Se o método não usar nenhum atributo da classe (com this) então podemos deixá-la como static
  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView(this.options);
    }

    // Forma alternativa
    // const dist = section.offsetTop
    // window.scrollTo({
    //     top: dist,
    //     behavior: 'smooth',
    // })
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
