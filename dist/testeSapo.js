"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sapo_1 = require("./Sapo");
//INSTANCIAR (CRIAR OBJETO)
const sapo = new Sapo_1.Sapo('Sapo-boi', 'verde', 10);
console.log(sapo.getEspecie());
console.log(sapo.getCor());
console.log(`${sapo.getTamanho()}Cm`);
console.log(sapo.comerInsetos());
console.log(sapo.pular());
//# sourceMappingURL=testeSapo.js.map