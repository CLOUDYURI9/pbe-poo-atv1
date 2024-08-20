export class Arvore {
    
    //ATRIBUTOS
    private especie: string;
    private idade: number;
    private tamanho: number;

    public constructor(_especie: string, _idade: number, _tamanho: number){
        this.especie = _especie;
        this.idade = _idade;
        this.tamanho = _tamanho;
    }

    // METODOS GET E SET
    public getEspecie(): string{
        return this.especie;
    }

    public setEspecie(_especie:string): void{
        this.especie = _especie;
    }

    public getIdade(): number{
        return this.idade;
    }

    public setIdade(_idade: number): void{
        this.idade = _idade;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }


    //METDOS DIAGRAMA
    public fotossintes(): string {
        return 'A árvore está fazendo fotossintese...';
    }

    public fazerSombra(): string {
        
        return  'A árvore está fazendo sombra...'
    }
   
}