export type PaisModel = {
    id: number;
    descripcion: string;
    status: number;
    created_at: Date;
    updated_at: Date;
}

export type PaisCreate = {
    descripcion: string;
    status: number;
}

export type PaisUpdate = {
    id: number;
    descripcion: string;
    status: number;
}