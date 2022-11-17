export class Educacion {
    id?: number;
    nombreEdu: string;
    tituloEdu: string;
    descripcionEdu: string;
    fechaEdu: string;

    constructor(nombreEdu:string, tituloEdu:string, descripcionEdu:string, fechaEdu:string){
        this.nombreEdu = nombreEdu;
        this.tituloEdu = tituloEdu;
        this.descripcionEdu = descripcionEdu;
        this.fechaEdu = fechaEdu;
    }

}
