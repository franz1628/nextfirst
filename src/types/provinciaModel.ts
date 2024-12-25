import { DepartamentoModel } from "./departamentoModel";


export class ProvinciaModel  {
    id: number = 0;
    descripcion: string = '';
    idDepartamento: number = 0;
    status: number = 1;
    created_at: Date = new Date();
    updated_at: Date = new Date();
    Departamento : DepartamentoModel = new DepartamentoModel();

    toCreate(){
        return {
            descripcion: this.descripcion,
            idDepartamento: this.idDepartamento,
            status: this.status
        }
    }

    toUpdate(){
        return {
            id: this.id,
            descripcion: this.descripcion,
            idDepartamento: this.idDepartamento,
            status: this.status
        }
    }
};