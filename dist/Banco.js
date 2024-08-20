"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    constructor(_tamanho, _material, _peso) {
        this.tamanho = _tamanho;
        this.material = _material;
        this.peso = _peso;
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
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    //METDOS DIAGRAMA
    sentar(pessoa) {
        return pessoa;
    }
    descansar(pessoa) {
        return pessoa;
    }
}
exports.Banco = Banco;
//# sourceMappingURL=Banco.js.map