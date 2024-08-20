"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroOndas = void 0;
class MicroOndas {
    constructor(_marca, _potencia, _tamanho) {
        this.marca = _marca;
        this.potencia = _potencia;
        this.tamanho = _tamanho;
    }
    // METODOS GET E SET
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getPotencia() {
        return this.potencia;
    }
    setPotencia(_potencia) {
        this.potencia = _potencia;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    //METDOS DIAGRAMA
    esquentar() {
        return 'A comida está esquentando';
    }
    cozinhar() {
        return 'A comida está cozinhando';
    }
}
exports.MicroOndas = MicroOndas;
//# sourceMappingURL=MicroOndas.js.map