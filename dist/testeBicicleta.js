"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bicicleta_1 = require("./Bicicleta");
//INSTANCIAR (CRIAR OBJETO)
const bicicleta = new Bicicleta_1.Bicicleta(29, 17, 15);
console.log(`Aro ${bicicleta.getAro()}`);
console.log(`O tamanho do quadro é ${bicicleta.getQuadro()}`);
console.log(`${bicicleta.getPeso()} KG`);
console.log(bicicleta.pedalar());
console.log(bicicleta.freiar());
//# sourceMappingURL=testeBicicleta.js.map