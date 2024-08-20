"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computador = void 0;
class Computador {
    constructor(_processador, _armazenamento, _sistema) {
        this.processador = _processador;
        this.armazenamento = _armazenamento;
        this.sistema = _sistema;
    }
    // METODOS GET E SET
    getProcessador() {
        return this.processador;
    }
    setProcessador(_processador) {
        this.processador = _processador;
    }
    getArmazenamento() {
        return this.armazenamento;
    }
    setArmazenamento(_armazenamento) {
        this.armazenamento = _armazenamento;
    }
    getSistema() {
        return this.sistema;
    }
    setSistema(_sistema) {
        this.sistema = _sistema;
    }
    //METDOS DIAGRAMA
    jogar(jogo) {
        return jogo;
    }
    assistir(filme) {
        return filme;
    }
}
exports.Computador = Computador;
//# sourceMappingURL=Computador.js.map