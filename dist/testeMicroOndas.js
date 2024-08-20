"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MicroOndas_1 = require("./MicroOndas");
//INSTANCIAR (CRIAR OBJETO)
const microOndas = new MicroOndas_1.MicroOndas('Electrolux', 1300, 20);
console.log(`${microOndas.getTamanho()}L`);
console.log(microOndas.getMarca());
console.log(`O microOndas tem a potência de ${microOndas.getPotencia()}W`);
console.log(microOndas.esquentar());
console.log(microOndas.cozinhar());
//# sourceMappingURL=testeMicroOndas.js.map