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

    public setMarca(_marca:string): void{
        this.marca= _marca;
    }

    public getCor(): string{
        return this.cor;
    }

    public setCor(_cor: string): void{
        this.cor = _cor;
    }

    public getTecido(): string{
        return this.tecido;
    }

    public setTamanho(_tecido: string): void{
        this.tecido = _tecido;
    }


    //METDOS DIAGRAMA
    public vestir(): string {
        return `Vestindo o casaco...`;
    }

    public esquentar(): string {
        return `O casado esta esquentando `
    }
}

