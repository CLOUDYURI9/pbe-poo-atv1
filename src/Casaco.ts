export class Casaco {
    
    //ATRIBUTOS
    private cor: string;
    private marca: string;
    private tecido: string;

    public constructor(_marca: string, _cor: string, _tecido: string){
        this.marca = _marca;
        this.cor = _cor;
        this.tecido = _tecido;
    }

    // METODOS GET E SET
    public getMarca(): string{
        return this.marca;
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
    public envenenar(): string {
        return 'A cobra está envenenando...';
    }

    public engolir(): string {
        
        return  'A cobra está engolindo...'
    }
   
}