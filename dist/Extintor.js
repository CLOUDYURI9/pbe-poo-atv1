"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extintor = void 0;
class Extintor {
    constructor(_tamanho, _tipo, _cor) {
        this.tamanho = _tamanho;
        this.tipo = _tipo;
        this.cor = _cor;
    }
    // METODOS GET E SET
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    //METDOS DIAGRAMA
    proteger() {
        return 'O extintor está protegendo...';
    }
    apagarFogo() {
        return 'O Extintor está apagando o fogo...';
    }
}
exports.Extintor = Extintor;
//# sourceMappingURL=Extintor.js.map