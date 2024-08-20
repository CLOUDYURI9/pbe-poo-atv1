"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArCondicionado = void 0;
class ArCondicionado {
    constructor(_voltagem, _marca, _cor) {
        this.voltagem = _voltagem;
        this.marca = _marca;
        this.cor = _cor;
    }
    // METODOS GET E SET
    getVoltagem() {
        return this.voltagem;
    }
    setVoltagem(_voltagem) {
        this.voltagem = _voltagem;
    }
    getMarca() {
        return this.marca;
    }
    setMaterial(_marca) {
        this.marca = _marca;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    //METDOS DIAGRAMA
    esquentar() {
        return 'O Arcondicionado está esquentando...';
    }
    esfriar() {
        return 'O Arcondicionado está esfriando...';
    }
}
exports.ArCondicionado = ArCondicionado;
//# sourceMappingURL=ArCondicionado.js.map