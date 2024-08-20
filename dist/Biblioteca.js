"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor(_livros, _pessoas, _tamanho) {
        this.livros = _livros;
        this.pessoas = _pessoas;
        this.tamanho = _tamanho;
    }
    // METODOS GET E SET
    getLivros() {
        return this.livros;
    }
    setLivros(_livros) {
        this.livros = _livros;
    }
    getPessoas() {
        return this.pessoas;
    }
    setPessoas(_pessoas) {
        this.pessoas = _pessoas;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    //METDOS DIAGRAMA
    estudar() {
        return 'Os alunos estão estudando...';
    }
    jogar() {
        return 'Os alunos estão jogando...';
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map