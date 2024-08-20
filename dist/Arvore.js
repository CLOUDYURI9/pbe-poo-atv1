"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arvore = void 0;
class Arvore {
    constructor(_especie, _idade, _tamanho) {
        this.especie = _especie;
        this.idade = _idade;
        this.tamanho = _tamanho;
    }
    // METODOS GET E SET
    getEspecie() {
        return this.especie;
    }
    setEspecie(_especie) {
        this.especie = _especie;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(_idade) {
        this.idade = _idade;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    //METDOS DIAGRAMA
    fotossintes() {
        return 'A árvore está fazendo fotossintese...';
    }
    fazerSombra() {
        return 'A árvore está fazendo sombra...';
    }
}
exports.Arvore = Arvore;
//# sourceMappingURL=Arvore.js.map