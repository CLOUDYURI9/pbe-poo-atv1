import  { Camera}  from "./Camera";

//INSTANCIAR (CRIAR OBJETO)
const camera : Camera = new Camera(  4,'Plástico' , 'Asecam')


console.log(camera.getMaterial());
console.log(`${camera.getQualidade()}K`);
console.log(camera.getMarca());
console.log(camera.gravar());
console.log(camera.fotografar());