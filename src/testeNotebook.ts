
import  { Notebook }  from "./Notebook";

//INSTANCIAR (CRIAR OBJETO)
const notebook : Notebook = new Notebook( 'Ryzen 7 5700G', 10000000, 'Windows 11')


console.log(notebook.getArmazenamento());
console.log(notebook.getProcessador());
console.log(notebook.getSistema());
console.log(notebook.estudar('matematica'));
console.log(notebook.pesquisar());
