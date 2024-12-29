'use client';

import { ProvinciaService } from "@/services/provincia";
import { ProvinciaModel } from "@/types/provinciaModel";
import { useEffect, useState } from "react";
import { DepartamentoService } from "@/services/departamento";
import { DepartamentoModel } from "@/types/departamentoModel";
import Swal from "sweetalert2";
import ProvinciaList from "@/components/dashboard/provincia/ProvinciaList";
import ProvinciaForm from "@/components/dashboard/provincia/ProvinciaForm";
import { useRouter } from "next/navigation";
import apiClient from "@/services/apiClient";
import Loader from "@/components/loading/Loader";
import Button from "@/components/common/Button";
import SelectField from "@/components/forms/SelectField";
import Paginado from "@/components/common/Paginado";

export default function Provincia() {
    const router = useRouter();
    const [provincias, setProvincias] = useState<ProvinciaModel[]>([]);
    const [departamentos, setDepartamentos] = useState<DepartamentoModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [model, setModel] = useState<ProvinciaModel>(new ProvinciaModel());
    const [pageActual, setPageActual] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [numRegistros, setNumRegistros] = useState<number>(5);

    useEffect(() => {
        apiClient.get('/auth/validate').then(() => setIsLogin(true)).catch(() => router.push('/auth/login'));
    }, [router]);

    useEffect(() => {
        loadProvincias(pageActual);
        loadDepartamentos();
    }, [pageActual,numRegistros]);

    const loadProvincias = async (pageActual:number) => {
        setIsLoading(true);
        const res = (await ProvinciaService.getPaginado(pageActual, numRegistros)).data;
        setTotalPage(res.totalPages);
        setProvincias(res.data);
        setIsLoading(false);
    }

    const loadDepartamentos = async () => {
        const res = await DepartamentoService.get();
        setDepartamentos(res.data);
        setIsLoading(false);
    }

    const handleEditar = async (provincia: ProvinciaModel) => {
        setModel(Object.assign(new ProvinciaModel(), provincia));
    };

    const handleEliminar = async (provincia: ProvinciaModel) => {
        setIsLoading(true)
        Swal.fire({
            title: 'Estas seguro de eliminar?',
            text: "No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                await ProvinciaService.delete(provincia.id);
                loadProvincias(pageActual);
            }
        });
    }

    const handleGuardar = async (model: ProvinciaModel) => {
        setIsLoading(true);

        if (model.descripcion.trim() == '') {
            Swal.fire({
                icon: 'error',
                title: 'Debe escribir una descripcion',
            })
            setIsLoading(false)
            return
        }

        if (model.id === 0) {
            await ProvinciaService.create(model.toCreate());
        } else {
            const res = await ProvinciaService.update(model.id, model.toUpdate());
            Swal.fire({ title: res.message, icon: 'success' });
        }
        setModel(new ProvinciaModel());
        loadProvincias(pageActual);
    }

    return (
        <>
            {
                isLogin &&
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Provincias</h2>
                        <hr className="mb-4" />

                        <ProvinciaForm model={model} departamentos={departamentos} onGuardar={handleGuardar} />

                        <br />

                        {
                            isLoading 
                                ? <Loader /> 
                                :  
                            <>
                                <SelectField  label="Registros" onChange={(e)=>{setNumRegistros(+e.target.value);setPageActual(1)}} value={numRegistros.toString()}>
                                    <option value="0">Seleccionar</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </SelectField>

                                <ProvinciaList provincias={provincias} onEditar={handleEditar} onEliminar={handleEliminar} />
                                <Paginado pageActual={pageActual} totalPage={totalPage} onSetPageActual={setPageActual} />
                            </>    
                        }

                    </div>
            }
        </>

    );
}