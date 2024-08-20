"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sapo = void 0;
class Sapo {
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
    pular() {
        return 'O sapo esta pulando...';
    }
    comerInsetos() {
        return 'O sapo está comendo insetos...';
    }
}
exports.Sapo = Sapo;
//# sourceMappingURL=Sapo.js.map