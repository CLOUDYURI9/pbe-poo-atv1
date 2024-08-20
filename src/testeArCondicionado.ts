import  { ArCondicionado}  from "./ArCondicionado";

//INSTANCIAR (CRIAR OBJETO)
const arCondicionado : ArCondicionado = new ArCondicionado( 220, 'Samsung', 'Branco')


console.log(`${arCondicionado.getVoltagem()}V`);
console.log(arCondicionado.getMarca());
console.log(`O Arcondicionado tem a cor ${arCondicionado.getCor()}`);
console.log(arCondicionado.esquentar());
console.log(arCondicionado.esfriar());