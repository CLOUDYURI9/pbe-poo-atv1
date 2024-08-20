import  { Lixeira }  from "./Lixeira";

//INSTANCIAR (CRIAR OBJETO)
const lixeira : Lixeira = new Lixeira( 7, 'Plástico', 'Azul')


console.log(`${lixeira.getTamanho()}M`);
console.log(lixeira.getMaterial());
console.log(`O banco tem a cor ${lixeira.getCor()}`);
console.log(`O banco tem ${lixeira.armazenar(15)}KG de armazenamento `);
console.log(lixeira.conscientizacao());