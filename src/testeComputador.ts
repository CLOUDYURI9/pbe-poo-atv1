
import  { Computador }  from "./Computador";

//INSTANCIAR (CRIAR OBJETO)
const computador : Computador = new Computador( 'Ryzen 7 5700G', 10000000, 'Windows 11')


console.log(computador.getArmazenamento());
console.log(computador.getProcessador());
console.log(computador.getSistema());
console.log(`O computador está jogando ${computador.jogar('Warzone')} `);
console.log(`O computador esta assistindo ${computador.assistir(' O Diabo de cada Dia')} `);

