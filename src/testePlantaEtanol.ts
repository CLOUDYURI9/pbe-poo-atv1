import  { PlantaEtanol }  from "./PlantaEtanol";

//INSTANCIAR (CRIAR OBJETO)
const plantaEtanol : PlantaEtanol = new PlantaEtanol( 20, 'Aço', 'Branco')


console.log(`${plantaEtanol.getTamanho()}m³`);
console.log(plantaEtanol.getMaterial());
console.log(`A planta de etanol tem a cor ${plantaEtanol.getCor()}`);
console.log(`O banco tem ${plantaEtanol.armazenamento()}L de armazenamento `);
console.log(plantaEtanol.produzirEtanol());