export class PaisModel {
    id: number=0;
    descripcion: string='';
    idPais: number=0;
    status: number=1;
    created_at: Date=new Date();
    updated_at: Date=new Date();

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

