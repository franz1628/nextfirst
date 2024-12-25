export class DepartamentoModel {
    id: number = 0;
    descripcion: string = '';
    idPais: number = 0;
    status: number = 1;
    created_at: Date = new Date();
    updated_at: Date = new Date();

    create(){
        return {
            descripcion: this.descripcion,
            idPais: this.idPais,
            status: this.status
        }
    }
    update(){
        return {
            id: this.id,
            descripcion: this.descripcion,
            idPais: this.idPais,
            status: this.status
        }
    }
}

export class DepartamentoIni {
    id: number = 0;
    descripcion: string = "";
    idPais: number = 0;
    status: number = 1;
    created_at: Date = new Date();
    updated_at: Date = new Date();
}

export type DepartamentoCreate = {
    descripcion: string;
    idPais: number;
    status: number;
}

export type DepartamentoUpdate = {
    id: number;
    descripcion: string;
    idPais: number;
    status: number;
}