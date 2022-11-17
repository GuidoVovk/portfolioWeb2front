export class Experiencia {
    id?: number;
    nombreExp: string;
    nombreEmpresa: string;
    fechaExp: string;
    descripcionExp: string;

    constructor(nombreExp:string, nombreEmpresa:string, fechaExp:string, descripcionExp:string){
        this.nombreExp = nombreExp;
        this.nombreEmpresa = nombreEmpresa;
        this.fechaExp = fechaExp;
        this.descripcionExp = descripcionExp;
    }
}
