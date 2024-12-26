import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Table from "@/components/tables/Table";
import Tbody from "@/components/tables/Tbody";
import Td from "@/components/tables/Td";
import Tr from "@/components/tables/Tr";
import { DepartamentoModel } from "@/types/departamentoModel";
import { format } from "date-fns";
import { BiSave } from "react-icons/bi";

interface DepartamentoListProps {
    models:DepartamentoModel[]
    onEditar:(model:DepartamentoModel) => void
    onEliminar:(id:number) => void
}

const DepartamentoList:React.FC<DepartamentoListProps> = ({models,onEditar,onEliminar}) => {
    const headers = ['Id','Descripcion','Pais','Estado','Creacion','Modificacion','Acciones'];

    return (
        <Table headers={headers}>
            <Tbody>
                {models.map((item,index) => 
                    <Tr key={index}>
                        <Td>{item.id}</Td>
                        <Td>{item.descripcion}</Td>
                        <Td>{item.Pais.descripcion}</Td>
                        <Td>{item.status?<Badge color="success"> ACTIVO</Badge> : <Badge color="danger">INACTIVO</Badge>}</Td>
                        <Td>{format(item.created_at,"yyyy-MM-dd")}</Td>
                        <Td>{format(item.updated_at,"yyyy-MM-dd")}</Td>
                        <Td>
                            <div className="flex justify-center">
                                <Button color="warning" icon={<BiSave />} onClick={() => onEditar(item)} >Editar</Button>
                                <Button color="danger" icon={<BiSave />} onClick={() => onEliminar(item.id)} >Eliminar</Button>
                            </div>
                        </Td>
                    </Tr>
                )}
            </Tbody>
        </Table>
    );
}

export default DepartamentoList;