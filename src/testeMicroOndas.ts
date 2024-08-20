import  { MicroOndas }  from "./MicroOndas";

//INSTANCIAR (CRIAR OBJETO)
const microOndas : MicroOndas = new MicroOndas( 'Electrolux', 1300 , 20)


console.log(`${microOndas.getTamanho()}L`);
console.log(microOndas.getMarca());
console.log(`O microOndas tem a potência de ${microOndas.getPotencia()}W`);
console.log(microOndas.esquentar());
console.log(microOndas.cozinhar());