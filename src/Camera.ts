export class Camera {
    
    //ATRIBUTOS
    private qualidade: number;
    private material: string;
    private marca: string;

    public constructor(_qualidade: number, _material: string, _marca: string){
        this.qualidade = _qualidade;
        this.material = _material;
        this.marca = _marca;
    }

    // METODOS GET E SET
    public getQualidade(): number{
        return this.qualidade;
    }

    public setQualidade(_qualidade: number): void{
        this.qualidade = _qualidade;
    }

    public getMarca(): string{
        return this.marca;
    }

    public setMarca(_marca: string): void{
        this.marca = _marca;
    }

    public getMaterial(): string{
        return this.material;
    }

    public setMaterial(_material: string): void{
        this.material = _material;
    }



    //METDOS DIAGRAMA
    public gravar(): string {
        return  'A câmera está gravando...';
    }

    public fotografar(): string {
        return  'A câmera está fotografando...';
    }
}   
