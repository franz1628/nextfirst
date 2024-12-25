export type DistritoModel = {
    id: number;
    descripcion: string;
    idProvincia: number;
    status: number;
    created_at: Date;
    updated_at: Date;
}

export type DistritoCreate = {
    descripcion: string;
    idProvincia: number;
    status: number;
}

export type DistritoUpdate = {
    id: number;
    descripcion: string;
    idProvincia: number;
    status: number;
}