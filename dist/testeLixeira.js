"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lixeira_1 = require("./Lixeira");
//INSTANCIAR (CRIAR OBJETO)
const lixeira = new Lixeira_1.Lixeira(7, 'Plástico', 'Azul');
console.log(`${lixeira.getTamanho()}M`);
console.log(lixeira.getMaterial());
console.log(`O banco tem a cor ${lixeira.getCor()}`);
console.log(`O banco tem ${lixeira.armazenar(15)}KG de armazenamento `);
console.log(lixeira.conscientizacao());
//# sourceMappingURL=testeLixeira.js.map