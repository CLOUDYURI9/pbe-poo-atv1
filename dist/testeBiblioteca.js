"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Biblioteca_1 = require("./Biblioteca");
//INSTANCIAR (CRIAR OBJETO)
const biblioteca = new Biblioteca_1.Biblioteca(900, 30, 25);
console.log(`${biblioteca.getTamanho()}m²`);
console.log(`A biblioteca tem a capacidade de ${biblioteca.getPessoas()} pessoas`);
console.log(`A biblioteca têm ${biblioteca.getLivros()} livros`);
console.log(biblioteca.estudar());
console.log(biblioteca.jogar());
//# sourceMappingURL=testeBiblioteca.js.map