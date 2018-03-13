/*export class Temperatura {
    public id: string;
    public  anio: Date;
    public grados: number;
    public provincia: string;

    constructor (id, anio, grados, provincia) {
        this.id = id;
        this.anio = anio;
        this.grados = grados;
        this.provincia = provincia;
    }

}*/
export class Temperatura {
    constructor (public id: string,
                 public anio: number,
                 public grados: number,
                 public provincia: string) {
    }

}
