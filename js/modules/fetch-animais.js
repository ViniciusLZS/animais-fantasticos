import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    const animaisRespose = await fetch(url);
    const animaisJSON = await animaisRespose.json();
    const numerosGrid = document.querySelector('.numeros-grid');
  
    function createAnimals(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');
    
      div.innerHTML = `<h3>${animal.specie}</h3><span data-numeros>${animal.total}</span>`;
      return div;
    }

    animaisJSON.forEach(animal => {
      const divAnimal = createAnimals(animal);
      numerosGrid.appendChild(divAnimal);
    });
  
    initAnimaNumeros();
  }
 
  fetchAnimals('./animaisapi.json');
}