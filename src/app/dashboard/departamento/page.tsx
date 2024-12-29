'use client'
import DepartamentoForm from "@/components/dashboard/departamento/DepartamentoForm";
import DepartamentoList from "@/components/dashboard/departamento/DepartamentoList";
import Loader from "@/components/loading/Loader";
import apiClient from "@/services/apiClient";

import { DepartamentoService } from "@/services/departamento";
import { PaisService } from "@/services/pais";

import { DepartamentoModel } from "@/types/departamentoModel";
import { PaisModel } from "@/types/paisModel";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";


import Swal from "sweetalert2";

export default function Departamento() {
    const router = useRouter();
    const [models, setModels] = useState<DepartamentoModel[]>([]);
    const [paises, setPaises] = useState<PaisModel[]>([]);
    const [model, setModel] = useState<DepartamentoModel>(new DepartamentoModel());
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState<boolean>(false)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await apiClient.get('/auth/validate');
                setIsLogin(true);
            } catch {
                router.push('/auth/login');
            }
        };

        checkAuth();
    }, [router]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const [departamentos, provincias] = await Promise.all([DepartamentoService.get(), PaisService.get()]);
            setModels(departamentos.data);
            setPaises(provincias.data);
            setIsLoading(false)
        };
        fetchData();
    }, []);


    const handleGuardar = async (model: DepartamentoModel) => {
        setIsLoading(true)
        if (model.descripcion.trim() == '') {
            Swal.fire({
                icon: 'error',
                title: 'Debe escribir una descripcion',
            })
            setIsLoading(false)
            return
        }

        if (model.idPais === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Debe elegir un Pais',
            })
            setIsLoading(false)
            return
        }

        if (model.id) {
            const res = await DepartamentoService.update(model.id, model.toUpdate());
            Swal.fire({ title: res.message, icon: 'success' });
        } else {
            await DepartamentoService.create(model.toCreate());
        }
        
        setModel(new DepartamentoModel());
        setModels(((await DepartamentoService.get()).data));
        setIsLoading(false)
    }

    const handleEditar = (item: DepartamentoModel) => {
        setModel(Object.assign(new DepartamentoModel(), item));
    }

    const handleEliminar = async (id: number) => {
        setIsLoading(true)
        Swal.fire({
            title: 'Estas seguro de eliminar',
            icon: 'warning',
            text: 'No podras revertir esto',
            showCancelButton: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                await DepartamentoService.delete(id);
                setModels(((await DepartamentoService.get()).data));
                setIsLoading(false)
            }
        });
    }

    return <>

        {
            isLoading || !isLogin
                ?
                <Loader />
                :
                <div>
                      <h2 className="text-2xl font-semibold mb-4">Departamento</h2>
                      <hr className="mb-4" />

                    <DepartamentoForm model={model} paises={paises} onGuardar={(e) => handleGuardar(e)} />
                    <br />
                    <DepartamentoList models={models} onEditar={handleEditar} onEliminar={handleEliminar} />
                </div>
        }



    </>
}