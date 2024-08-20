"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantaEtanol = void 0;
class PlantaEtanol {
    constructor(_tamanho, _material, _cor) {
        this.tamanho = _tamanho;
        this.material = _material;
        this.cor = _cor;
    }
    // METODOS GET E SET
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    //METDOS DIAGRAMA
    produzirEtanol() {
        return 'A planta está produzindo o etanol...';
    }
    armazenamento() {
        return 400;
    }
}
exports.PlantaEtanol = PlantaEtanol;
//# sourceMappingURL=PlantaEtanol.js.map