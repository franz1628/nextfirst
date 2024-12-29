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

export default function Provincia() {
    const router = useRouter();
    const [provincias, setProvincias] = useState<ProvinciaModel[]>([]);
    const [departamentos, setDepartamentos] = useState<DepartamentoModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const [model, setModel] = useState<ProvinciaModel>(new ProvinciaModel());



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
        loadProvincias();
        loadDepartamentos();
    }, []);

    const loadProvincias = () => {
        const getProvincias = async () => {
            setIsLoading(true);
            const res = await ProvinciaService.get();
            setProvincias(res.data);
            setIsLoading(false);

        };
        getProvincias();
    }

    const loadDepartamentos = () => {
        const getDepartamentos = async () => {
            const res = await DepartamentoService.get();
            setDepartamentos(res.data);
            setIsLoading(false);

        };
        getDepartamentos();
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
                loadProvincias();
               
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
        loadProvincias();
    }

    return (
        <>

            {
                isLoading || !isLogin
                    ?
                    <Loader />
                    :
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Provincias</h2>
                        <hr className="mb-4" />

                        <ProvinciaForm model={model} departamentos={departamentos} onGuardar={handleGuardar} />

                        <br />

                        <ProvinciaList provincias={provincias} onEditar={handleEditar} onEliminar={handleEliminar} />
                    </div>
            }
        </>

    );
}