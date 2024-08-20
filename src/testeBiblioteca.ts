import  { Biblioteca }  from "./Biblioteca";

//INSTANCIAR (CRIAR OBJETO)
const biblioteca : Biblioteca = new Biblioteca( 900, 30 , 25)


console.log(`${biblioteca.getTamanho()}m²`);
console.log(`A biblioteca tem a capacidade de ${biblioteca.getPessoas()} pessoas`);
console.log(`A biblioteca têm ${biblioteca.getLivros()} livros`);
console.log(biblioteca.estudar());
console.log(biblioteca.jogar());