"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlantaEtanol_1 = require("./PlantaEtanol");
//INSTANCIAR (CRIAR OBJETO)
const plantaEtanol = new PlantaEtanol_1.PlantaEtanol(20, 'Aço', 'Branco');
console.log(`${plantaEtanol.getTamanho()}m³`);
console.log(plantaEtanol.getMaterial());
console.log(`A planta de etanol tem a cor ${plantaEtanol.getCor()}`);
console.log(`O banco tem ${plantaEtanol.armazenamento()}L de armazenamento `);
console.log(plantaEtanol.produzirEtanol());
//# sourceMappingURL=testePlantaEtanol.js.map