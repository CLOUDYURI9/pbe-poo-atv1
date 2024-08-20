"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arvore_1 = require("./Arvore");
//INSTANCIAR (CRIAR OBJETO)
const arvore = new Arvore_1.Arvore('Pau-Brasil', 900, 30);
console.log(`${arvore.getTamanho()}M`);
console.log(arvore.getEspecie());
console.log(`A árvore tem ${arvore.getIdade()} Anos`);
console.log(arvore.fotossintes());
console.log(arvore.fazerSombra());
//# sourceMappingURL=testeArvore.js.map