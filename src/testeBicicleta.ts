import  { Bicicleta }  from "./Bicicleta";

//INSTANCIAR (CRIAR OBJETO)
const bicicleta : Bicicleta = new Bicicleta( 29, 17 , 15)


console.log(`Aro ${bicicleta.getAro()}`);
console.log(`O tamanho do quadro é ${bicicleta.getQuadro()}`);
console.log(`${bicicleta.getPeso()} KG`);
console.log(bicicleta.pedalar());
console.log(bicicleta.freiar());