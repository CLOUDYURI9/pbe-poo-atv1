"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobra = void 0;
class Cobra {
    constructor(_especie, _cor, _tamanho) {
        this.especie = _especie;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }
    // METODOS GET E SET
    getEspecie() {
        return this.especie;
    }
    setEspecie(_especie) {
        this.especie = _especie;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    //METDOS DIAGRAMA
    envenenar() {
        return 'A cobra está envenenando...';
    }
    engolir() {
        return 'A cobra está engolindo...';
    }
}
exports.Cobra = Cobra;
//# sourceMappingURL=Cobra.js.map