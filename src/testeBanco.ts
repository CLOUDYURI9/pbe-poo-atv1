import  { Banco }  from "./Banco";

//INSTANCIAR (CRIAR OBJETO)
const banco : Banco = new Banco( 7, 'Madeira', 20)


console.log(`${banco.getTamanho()}M`);
console.log(banco.getMaterial());
console.log(`${banco.getPeso()}KG`);
console.log(`${banco.sentar(`Jorge`)} está sentando. `);
console.log(`${banco.descansar(`Jorge`)} está descansando. `);