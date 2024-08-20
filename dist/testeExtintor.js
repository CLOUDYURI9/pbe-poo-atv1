"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Extintor_1 = require("./Extintor");
//INSTANCIAR (CRIAR OBJETO)
const extintor = new Extintor_1.Extintor(4, 'Água', 'Vermelho');
console.log(`${extintor.getTamanho()}KG`);
console.log(extintor.getTipo());
console.log(`O Extintor tem a cor ${extintor.getCor()}`);
console.log(extintor.proteger());
console.log(extintor.apagarFogo());
//# sourceMappingURL=testeExtintor.js.map