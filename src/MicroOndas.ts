export class MicroOndas {
    
    //ATRIBUTOS
    private marca: string;
    private potencia: number;
    private tamanho: number;

    public constructor(_marca: string, _potencia: number, _tamanho: number){
        this.marca = _marca;
        this.potencia = _potencia;
        this.tamanho = _tamanho;
    }

    // METODOS GET E SET
    public getMarca(): string{
        return this.marca;
    }

    public setMarca(_marca:string): void{
        this.marca = _marca;
    }

    public getPotencia(): number{
        return this.potencia;
    }

    public setPotencia(_potencia: number): void{
        this.potencia = _potencia;
    }

    public getTamanho(): number{
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void{
        this.tamanho = _tamanho;
    }


    //METDOS DIAGRAMA
    public esquentar(): string {
        return 'A comida está esquentando';
    }

    public cozinhar(): string {
        
        return  'A comida está cozinhando'
    }
   
}