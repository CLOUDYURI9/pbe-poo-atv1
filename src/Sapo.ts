export class Sapo {
    
    //ATRIBUTOS
    private especie: string;
    private cor: string;
    private tamanho: number;

    public constructor(_especie: string, _cor: string, _tamanho: number){
        this.especie = _especie;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }

    // METODOS GET E SET
    public getEspecie(): string{
        return this.especie;
    }

    public setEspecie(_especie:string): void{
        this.especie= _especie;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }


    //METDOS DIAGRAMA
    public pular(): string {
        return 'O sapo esta pulando...';
    }

    public comerInsetos(): string {
        
        return  'O sapo está comendo insetos...'
    }
   
}