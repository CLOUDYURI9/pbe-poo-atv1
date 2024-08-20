export class Biblioteca {
    
    //ATRIBUTOS
    private livros: number;
    private pessoas: number;
    private tamanho: number;

    public constructor(_livros: number, _pessoas: number, _tamanho: number){
        this.livros = _livros;
        this.pessoas = _pessoas;
        this.tamanho = _tamanho;
    }

    // METODOS GET E SET
    public getLivros(): number{
        return this.livros;
    }

    public setLivros(_livros:number): void{
        this.livros = _livros;
    }

    public getPessoas(): number{
        return this.pessoas;
    }

    public setPessoas(_pessoas: number): void{
        this.pessoas = _pessoas;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }


    //METDOS DIAGRAMA
    public estudar(): string {
        return 'Os alunos estão estudando...';
    }

    public jogar(): string {
        
        return  'Os alunos estão jogando...'
    }
   
}