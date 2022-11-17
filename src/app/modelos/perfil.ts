export class Perfil {
    id?:number;
    nombrePerfil: string;
    nombrePuesto: string;
    descPerfil: string;
    imgPerfil: string;

    constructor(nombrePerfil:string, nombrePuestro:string, descPerfil:string, imgPerfil:string){
        this.nombrePerfil = nombrePerfil;
        this.nombrePuesto = nombrePuestro;
        this.descPerfil = descPerfil;
        this.imgPerfil = imgPerfil;
    }
}
