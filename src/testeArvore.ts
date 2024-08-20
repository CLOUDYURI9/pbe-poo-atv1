import  { Arvore }  from "./Arvore";

//INSTANCIAR (CRIAR OBJETO)
const arvore : Arvore = new Arvore( 'Pau-Brasil', 900 , 30)


console.log(`${arvore.getTamanho()}M`);
console.log(arvore.getEspecie());
console.log(`A árvore tem ${arvore.getIdade()} Anos`);
console.log(arvore.fotossintes());
console.log(arvore.fazerSombra());