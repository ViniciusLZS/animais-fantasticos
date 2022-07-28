import debounce from "./debounce.js";

export default class ShowScroll{
  constructor(list) {
    this.sections = document.querySelectorAll(list);
    this.windowAHalf = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distância de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      console.log(offset)
      return {
        element: section,
        offset: Math.floor(offset - this.windowAHalf),
      };
    });
  }

  // verifica a distância em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if(window.pageYOffset > item.offset) 
        item.element.classList.add('ativo');
      else if(item.element.classList.contains('ativo'))
        item.element.classList.remove('ativo');
    });
  }

  // Inicia as funções
  init() {
    if(this.sections.length){
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
}
