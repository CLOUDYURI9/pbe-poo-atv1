import  { Sapo }  from "./Sapo";

//INSTANCIAR (CRIAR OBJETO)
const sapo : Sapo = new Sapo( 'Sapo-boi', 'verde', 10)


console.log(sapo.getEspecie());
console.log(sapo.getCor());
console.log(`${sapo.getTamanho()}Cm`);
console.log(sapo.comerInsetos());
console.log(sapo.pular());