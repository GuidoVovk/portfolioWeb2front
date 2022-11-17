export class Proyectos {
    id?: number;
    nombreProyecto: string;
    descProyecto: string;
    imgProyecto: string;
    enlaceProyecto: string;

    constructor(nombreProyecto:string, descProyecto:string, imgProyecto:string, enlaceProyecto:string){
        this.nombreProyecto = nombreProyecto;
        this.descProyecto = descProyecto;
        this.imgProyecto = imgProyecto;
        this.enlaceProyecto = enlaceProyecto;
    }
}

