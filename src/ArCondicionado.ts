export class ArCondicionado {
    
    //ATRIBUTOS
    private voltagem: number;
    private marca: string;
    private cor: string;

    public constructor(_voltagem: number, _marca: string, _cor: string){
        this.voltagem = _voltagem;
        this.marca = _marca;
        this.cor = _cor;
    }

    // METODOS GET E SET
    public getVoltagem(): number{
        return this.voltagem;
    }

    public setVoltagem(_voltagem: number): void{
        this.voltagem = _voltagem;
    }

    public getMarca(): string{
        return this.marca;
    }

    public setMaterial(_marca: string): void{
        this.marca = _marca;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void{
        this.cor = _cor;
    }



    //METDOS DIAGRAMA
    public esquentar(): string {
        return  'O Arcondicionado está esquentando...';
    }

    public esfriar(): string {
        return  'O Arcondicionado está esfriando...';
    }
   
}