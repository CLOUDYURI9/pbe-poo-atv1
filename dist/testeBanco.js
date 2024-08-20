"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Banco_1 = require("./Banco");
//INSTANCIAR (CRIAR OBJETO)
const banco = new Banco_1.Banco(7, 'Madeira', 20);
console.log(`${banco.getTamanho()}M`);
console.log(banco.getMaterial());
console.log(`${banco.getPeso()}KG`);
console.log(`${banco.sentar(`Jorge`)} está sentando. `);
console.log(`${banco.descansar(`Jorge`)} está descansando. `);
//# sourceMappingURL=testeBanco.js.map