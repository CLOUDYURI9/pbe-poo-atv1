import  { Casaco }  from "./Casaco";

//INSTANCIAR (CRIAR OBJETO)
const casaco : Casaco = new Casaco( 'Calvin Klein', 'Branca', 'Algodão')


console.log(casaco.getMarca());
console.log(casaco.getCor());
console.log(casaco.getTecido());
console.log(casaco.vestir());
console.log(casaco.esquentar());