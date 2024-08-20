export class Banco {
    
    //ATRIBUTOS
    private tamanho: number;
    private material: string;
    private peso: number;

    public constructor(_tamanho: number, _material: string, _peso: number){
        this.tamanho = _tamanho;
        this.material = _material;
        this.peso = _peso;
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

    public getPeso(): number{
        return this.peso;
    }

    public setPeso(_peso: number): void{
        this.peso = _peso;
    }

    //METDOS DIAGRAMA
    public sentar(pessoa: string): string {
        return  pessoa;
    }

    public descansar(pessoa: string): string {
        
        return  pessoa;
    }
   
}