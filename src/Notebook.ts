export class Notebook {
    
    //ATRIBUTOS
    private processador: string;
    private armazenamento: number;
    private sistema: string;

    public constructor(_processador: string, _armazenamento: number, _sistema: string){
        this.processador = _processador;
        this.armazenamento = _armazenamento;
        this.sistema = _sistema;
    }

    // METODOS GET E SET
    public getProcessador(): string{
        return this.processador;
    }

    public setProcessador(_processador:string): void{
        this.processador = _processador;
    }

    public getArmazenamento(): number{
        return this.armazenamento;
    }

    public setArmazenamento(_armazenamento: number): void{
        this.armazenamento = _armazenamento;
    }

    public getSistema(): string{
        return this.sistema;
    }

    public setSistema(_sistema: string): void{
        this.sistema = _sistema;
    }


    //METDOS DIAGRAMA
    public estudar(disciplina: string): string {
        return disciplina;
    }

    public pesquisar(): string {
        
        return  'Pesquisando: Quantos habitantes há no Brasil?'
    }
   
}