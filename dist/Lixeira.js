"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lixeira = void 0;
class Lixeira {
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
    armazenar(lixo) {
        return lixo;
    }
    conscientizacao() {
        return 'Muito bem!! Você está ajudando o meio ambiente!';
    }
}
exports.Lixeira = Lixeira;
//# sourceMappingURL=Lixeira.js.map