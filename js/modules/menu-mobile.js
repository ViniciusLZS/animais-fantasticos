import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList,events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';
    this.openMenu = this.openMenu.bind(this);
    
    // Define o touchstart e click como argumento padrão
    // de events caso o usuário não defina
    if(events === undefined) 
      this.events = ['click'] ;
    else 
      this.events =  events;
  }
  

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    
    outsideClick(this.menuList, this.events, () =>{
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }
  
  addEventMenu() {
      this.events.forEach(event => this.menuButton.addEventListener(event, this.openMenu));
  }

  init() {
    if(this.menuButton && this.menuList){
      this.addEventMenu();
    }
    return this;
  }  
}