import ShowNumbers from "./show-numbers.js";

export default function CreateNumbersAnimals(url, target) {

   // Cria a div contendo informações com o total de animais
   function createAnimals(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numeros>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  function fillDivNumber(animal) {
    const numbersGrid = document.querySelector(target);

    const divAnimal = createAnimals(animal);
    numbersGrid.appendChild(divAnimal);
  }
 
  // Anima os números de cada animal
  function showAnimalsNubers() {
    const showNumber = new ShowNumbers('[data-numeros]','.numeros', 'ativo');
    showNumber.init();
  }

  // Puxa os animais através de um arquivo json e
  // cria cada animal utilizando a função createAnimals
  async function fetchAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      
      // Após a transformação de json,
      // ativa as funções para preencher e animar os números
      animalsJSON.forEach((animal) => fillDivNumber(animal));
      showAnimalsNubers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchAnimals();
}