'use client'
import DepartamentoForm from "@/components/dashboard/departamento/DepartamentoForm";
import DepartamentoList from "@/components/dashboard/departamento/DepartamentoList";
import Loader from "@/components/loading/Loader";
import { DepartamentoService } from "@/services/departamento";
import { PaisService } from "@/services/pais";

import { DepartamentoModel } from "@/types/departamentoModel";
import { PaisModel } from "@/types/paisModel";
import { useCallback, useEffect, useState } from "react";

import Swal from "sweetalert2";

export default function Departamento ()  {
    const [models,setModels] = useState<DepartamentoModel[]>([]);
    const [paises,setPaises] = useState<PaisModel[]>([]);
    const [model, setModel] = useState<DepartamentoModel>(new DepartamentoModel());
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const [departamentos,provincias] = await Promise.all([DepartamentoService.get(), PaisService.get()]);
            setModels(departamentos.data);
            setPaises(provincias.data);
        };
        fetchData();
    },[]);

    
    const handleGuardar = async (model:DepartamentoModel) => {
        if(model.id){
            await DepartamentoService.update(model.id,model.toUpdate());
        }else{
            await DepartamentoService.create(model.toCreate());
        }
        setModel(new DepartamentoModel());
        setModels(((await DepartamentoService.get()).data));
    }

    const handleEditar = (item: DepartamentoModel) => {
        setModel(Object.assign(new DepartamentoModel(),item));
    }

    const handleEliminar = async (id: number) => {
        Swal.fire({
            title: 'Estas seguro de eliminar',
            icon: 'warning',
            text: 'No podras revertir esto',
            showCancelButton: true
        }).then(async (result) => {
            if(result.isConfirmed){
                await DepartamentoService.delete(id);
                setModels(((await DepartamentoService.get()).data));
            }
        });
    }

    return <>
        {loading && <Loader  />}
        <h2 className="">Departamento</h2>
        <hr className="mb-4"/>

       <DepartamentoForm model={model} paises={paises} onGuardar={(e)=>handleGuardar(e)} />
        <br />
        <DepartamentoList models={models} onEditar={handleEditar} onEliminar={handleEliminar}/>
    </>
}