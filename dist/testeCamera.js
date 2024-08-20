"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Camera_1 = require("./Camera");
//INSTANCIAR (CRIAR OBJETO)
const camera = new Camera_1.Camera(4, 'Plástico', 'Asecam');
console.log(camera.getMaterial());
console.log(`${camera.getQualidade()}K`);
console.log(camera.getMarca());
console.log(camera.gravar());
console.log(camera.fotografar());
//# sourceMappingURL=testeCamera.js.map