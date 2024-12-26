'use client';

import { ProvinciaService } from "@/services/provincia";
import { ProvinciaModel } from "@/types/provinciaModel";
import { useEffect, useState } from "react";
import Loader from "@/components/loading/Loader";
import { DepartamentoService } from "@/services/departamento";
import { DepartamentoModel } from "@/types/departamentoModel";
import Swal from "sweetalert2";
import ProvinciaList from "@/components/dashboard/provincia/ProvinciaList";
import ProvinciaForm from "@/components/dashboard/provincia/ProvinciaForm";

export default function Provincia() {
    const [provincias, setProvincias] = useState<ProvinciaModel[]>([]);
    const [departamentos, setDepartamentos] = useState<DepartamentoModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [model, setModel] = useState<ProvinciaModel>(new ProvinciaModel());

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
        setModel(Object.assign({}, provincia));
    };

    const handleEliminar = async (provincia: ProvinciaModel) => {
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
        if (model.id === 0) {
            await ProvinciaService.create(model.toCreate());
        } else {
            await ProvinciaService.update(model.id, model.toUpdate());
        }
        setModel(new ProvinciaModel());
        loadProvincias();
    }

    return (
        <>
            {isLoading && <Loader />}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Provincias</h2>
                <hr className="mb-4" />

                <ProvinciaForm model={model} departamentos={departamentos} onGuardar={handleGuardar} />

                <br />

                <ProvinciaList provincias={provincias} onEditar={handleEditar} onEliminar={handleEliminar} />
            </div>
        </>

    );
}