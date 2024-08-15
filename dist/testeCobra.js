"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cobra_1 = require("./Cobra");
//INSTANCIAR (CRIAR OBJETO)
const cobra = new Cobra_1.Cobra('Píton', 'branca com amarelo', 2);
console.log(cobra.getEspecie());
console.log(cobra.getCor());
console.log(`${cobra.getTamanho()}M`);
console.log(cobra.envenenar());
console.log(cobra.engolir());
//# sourceMappingURL=testeCobra.js.map