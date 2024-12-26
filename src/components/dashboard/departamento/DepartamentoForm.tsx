import Button from "@/components/common/Button";
import Form from "@/components/forms/Form";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { DepartamentoModel } from "@/types/departamentoModel";
import { PaisModel } from "@/types/paisModel";
import { useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";

interface DepartamentoFormProps {
    model: DepartamentoModel;
    paises:PaisModel[];
    onGuardar: (model: DepartamentoModel) => void;
}

const DepartamentoForm:React.FC<DepartamentoFormProps> = ({model,paises,onGuardar}) => {
    const [modelIni,setModelIni] = useState<DepartamentoModel>(new DepartamentoModel());
    useEffect(() => {
        setModelIni(model);
    },[model]);

    const handleInputChange = (key: keyof DepartamentoModel, value: number|string) => {
        setModelIni(Object.assign(new DepartamentoModel(),modelIni,{[key]: value}) );
    }
    return (
        <Form>
            <InputField value={modelIni.descripcion} onChange={(e) => handleInputChange("descripcion", e.target.value)} name="descripcion" label="Descripcion"  placeholder="Descripcion"  />
            <SelectField value={modelIni.idPais.toString()} onChange={(e) => handleInputChange("idPais", +e.target.value)} name="idPais" label="Pais">
                <option value="0">Seleccione</option>
                {paises.map((item,index) => 
                    <option key={index} value={item.id}>{item.descripcion}</option>
                )}
            </SelectField>  

            <SelectField value={modelIni.status.toString()} onChange={(e) => handleInputChange("status", +e.target.value)} name="status" label="Estado">
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
            </SelectField>

            <div className="flex justify-center">
                <Button color="success" icon={<BiSave />} onClick={()=>onGuardar(modelIni)} >Guardar</Button>
                <Button color="warning" icon={<BiSave />} onClick={()=>setModelIni(new DepartamentoModel())} >Nuevo</Button>
            </div>
        </Form>
    )
}

export default DepartamentoForm;