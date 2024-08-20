"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Computador_1 = require("./Computador");
//INSTANCIAR (CRIAR OBJETO)
const computador = new Computador_1.Computador('Ryzen 7 5700G', 10000000, 'Windows 11');
console.log(computador.getArmazenamento());
console.log(computador.getProcessador());
console.log(computador.getSistema());
console.log(`O computador está jogando ${computador.jogar('Warzone')} `);
console.log(`O computador esta assistindo ${computador.assistir(' O Diabo de cada Dia')} `);
//# sourceMappingURL=testeComputador.js.map