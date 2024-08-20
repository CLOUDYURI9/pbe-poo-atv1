import  { Extintor}  from "./Extintor";

//INSTANCIAR (CRIAR OBJETO)
const extintor : Extintor = new Extintor( 4, 'Água', 'Vermelho')


console.log(`${extintor.getTamanho()}KG`);
console.log(extintor.getTipo());
console.log(`O Extintor tem a cor ${extintor.getCor()}`);
console.log(extintor.proteger());
console.log(extintor.apagarFogo());