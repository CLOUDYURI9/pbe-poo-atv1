export class Bicicleta {
    
    //ATRIBUTOS
    private aro: number;
    private quadro: number;
    private peso: number;

    public constructor(_aro: number, _quadro: number, _peso: number){
        this.aro = _aro;
        this.quadro = _quadro;
        this.peso = _peso;
    }

    // METODOS GET E SET
    public getAro(): number{
        return this.aro;
    }

    public setAro(_aro:number): void{
        this.aro = _aro;
    }

    public getQuadro(): number{
        return this.quadro;
    }

    public setQuadro(_quadro: number): void{
        this.quadro = _quadro;
    }

    public getPeso(): number{
        return this.peso;
    }

    public setPeso(_peso: number): void{
        this.peso = _peso;
    }


    //METDOS DIAGRAMA
    public pedalar(): string {
        return 'A bicicleta está pedalando...';
    }

    public freiar(): string {
        
        return  'A bicicleta está freiando...'
    }
   
}