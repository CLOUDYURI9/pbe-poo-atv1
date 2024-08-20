"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArCondicionado_1 = require("./ArCondicionado");
//INSTANCIAR (CRIAR OBJETO)
const arCondicionado = new ArCondicionado_1.ArCondicionado(220, 'Samsung', 'Branco');
console.log(`${arCondicionado.getVoltagem()}V`);
console.log(arCondicionado.getMarca());
console.log(`O Arcondicionado tem a cor ${arCondicionado.getCor()}`);
console.log(arCondicionado.esquentar());
console.log(arCondicionado.esfriar());
//# sourceMappingURL=testeArCondicionado.js.map