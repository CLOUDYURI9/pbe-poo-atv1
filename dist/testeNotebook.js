"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notebook_1 = require("./Notebook");
//INSTANCIAR (CRIAR OBJETO)
const notebook = new Notebook_1.Notebook('Ryzen 7 5700G', 10000000, 'Windows 11');
console.log(notebook.getArmazenamento());
console.log(notebook.getProcessador());
console.log(notebook.getSistema());
console.log(notebook.estudar('matematica'));
console.log(notebook.pesquisar());
//# sourceMappingURL=testeNotebook.js.map