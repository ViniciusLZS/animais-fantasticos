import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(list, events) {
    this.dropDownMenus = document.querySelectorAll(list);
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.activeClass = 'active';
    
    // Define o touchstart e click como argumento padrão
    // de events caso o usuário não defina
    if(events === undefined) 
      this.events = ['touchstart', 'click'] 
    else 
      this.events =  events;
  }

  // Ativa o dropdown e adiciona
  // a função que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }
  
  // Adiciona os eventos ao dropdownmenu
  addEventDropDown() {
    this.dropDownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  // inicia a função
  init() {
    if(this.dropDownMenus.length) {
      this.addEventDropDown();
    }
    return this;
  }
}


