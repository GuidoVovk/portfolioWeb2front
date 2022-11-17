export class HabilidadesDesign {
    id?: number;
    nombreHabDesign: string;
    porcentajeHabDesign: string;

    constructor(nombreHabDesign:string, porcentajeHabDesign:string){
        this.nombreHabDesign = nombreHabDesign;
        this.porcentajeHabDesign = porcentajeHabDesign;
    }
}
