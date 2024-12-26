import { PaisModel } from "./paisModel";

export class DepartamentoModel {
    id: number = 0;
    descripcion: string = '';
    idPais: number = 0;
    status: number = 1;
    created_at: Date = new Date();
    updated_at: Date = new Date();
    Pais:PaisModel = new PaisModel();
    

    toCreate(){
        return {
            descripcion: this.descripcion,
            idPais: this.idPais,
            status: this.status
        }
    }
    toUpdate(){
        return {
            id: this.id,
            descripcion: this.descripcion,
            idPais: this.idPais,
            status: this.status
        }
    }
}