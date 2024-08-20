"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casaco = void 0;
class Casaco {
    constructor(_marca, _cor, _tecido) {
        this.marca = _marca;
        this.cor = _cor;
        this.tecido = _tecido;
    }
    // METODOS GET E SET
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getTecido() {
        return this.tecido;
    }
    setTamanho(_tecido) {
        this.tecido = _tecido;
    }
    //METDOS DIAGRAMA
    vestir() {
        return `Vestindo o casaco...`;
    }
    esquentar() {
        return `O casado esta esquentando `;
    }
}
exports.Casaco = Casaco;
//# sourceMappingURL=Casaco.js.map