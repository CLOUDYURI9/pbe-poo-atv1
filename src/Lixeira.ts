export class Lixeira {
    
    //ATRIBUTOS
    private tamanho: number;
    private material: string;
    private cor: string;

    public constructor(_tamanho: number, _material: string, _cor: string){
        this.tamanho = _tamanho;
        this.material = _material;
        this.cor = _cor;
    }

    // METODOS GET E SET
    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }

    public getMaterial(): string{
        return this.material;
    }

    public setMaterial(_material: string): void{
        this.material = _material;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void{
        this.cor = _cor;
    }



    //METDOS DIAGRAMA
    public armazenar(lixo:number ): number {
        return  lixo;
    }

    public conscientizacao(): string {
        
        return  'Muito bem!! Você está ajudando o meio ambiente!'
    }
   
}