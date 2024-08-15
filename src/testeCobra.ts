import  { Cobra }  from "./Cobra";

//INSTANCIAR (CRIAR OBJETO)
const cobra : Cobra = new Cobra( 'Píton', 'branca com amarelo', 2)


console.log(cobra.getEspecie());
console.log(cobra.getCor());
console.log(`${cobra.getTamanho()}M`);
console.log(cobra.envenenar());
console.log(cobra.engolir());