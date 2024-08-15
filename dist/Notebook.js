"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notebook = void 0;
class Notebook {
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
    estudar(disciplina) {
        return disciplina;
    }
    pesquisar() {
        return 'Pesquisando: Quantos habitantes há no Brasil?';
    }
}
exports.Notebook = Notebook;
//# sourceMappingURL=Notebook.js.map