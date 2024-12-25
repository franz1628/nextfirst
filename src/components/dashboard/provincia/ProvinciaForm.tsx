import { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import Form from "@/components/forms/Form";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { DepartamentoModel } from "@/types/departamentoModel";
import { ProvinciaModel } from "@/types/provinciaModel";
import { BiSave } from "react-icons/bi";

interface ProvinciaFormProps {
    model: ProvinciaModel;
    departamentos: DepartamentoModel[];
    onGuardar: (model: ProvinciaModel) => void;
}

const ProvinciaForm: React.FC<ProvinciaFormProps> = ({ model, departamentos, onGuardar }) => {
    const [formData, setFormData] = useState<ProvinciaModel>(model);

    useEffect(() => {
        setFormData(model);
    }, [model]);

    const handleInputChange = (key: keyof ProvinciaModel, value: any) => {
        setFormData(Object.assign(new ProvinciaModel(), formData, { [key]: value }));
    };

    const handleGuardar = () => {
        onGuardar(formData);
    };

    const handleNuevo = () => {
        setFormData(new ProvinciaModel());
    };

    return (
        <Form>
            <InputField
                type="text"
                label="Descripción"
                placeholder="Ingrese descripción"
                onChange={(e) => handleInputChange("descripcion", e.target.value)}
                value={formData.descripcion}
            />

            <SelectField
                label="Departamento"
                onChange={(e) => handleInputChange("idDepartamento", parseInt(e.target.value))}
                value={formData.idDepartamento?.toString() || ""}
            >
                <option value="">Seleccione</option>
                {departamentos.map((departamento) => (
                    <option key={departamento.id} value={departamento.id.toString()}>
                        {departamento.descripcion}
                    </option>
                ))}
            </SelectField>

            <SelectField
                label="Estado"
                onChange={(e) => handleInputChange("status", parseInt(e.target.value))}
                value={formData.status?.toString() || ""}
            >
                <option value="">Seleccione</option>
                <option value="1">ACTIVO</option>
                <option value="0">INACTIVO</option>
            </SelectField>

            <div className="flex justify-between">
                <Button color="success" onClick={handleGuardar} icon={<BiSave />}>
                    Guardar
                </Button>
                <Button color="warning" onClick={handleNuevo} icon={<BiSave />}>
                    Nuevo
                </Button>
            </div>
        </Form>
    );
};

export default ProvinciaForm;
