export class Extintor {
    
    //ATRIBUTOS
    private tamanho: number;
    private tipo: string;
    private cor: string;

    public constructor(_tamanho: number, _tipo: string, _cor: string){
        this.tamanho = _tamanho;
        this.tipo = _tipo;
        this.cor = _cor;
    }

    // METODOS GET E SET
    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }

    public getTipo(): string{
        return this.tipo;
    }

    public setTipo(_tipo: string): void{
        this.tipo = _tipo;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void{
        this.cor = _cor;
    }



    //METDOS DIAGRAMA
    public proteger(): string {
        return  'O extintor está protegendo...';
    }

    public apagarFogo(): string {
        return  'O Extintor está apagando o fogo...';
    }
   
}