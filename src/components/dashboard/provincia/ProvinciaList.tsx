import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Table from "@/components/tables/Table";
import Tbody from "@/components/tables/Tbody";
import Td from "@/components/tables/Td";
import Tr from "@/components/tables/Tr";
import { ProvinciaModel } from "@/types/provinciaModel";
import { format } from "date-fns";
import { BiPencil, BiTrash } from "react-icons/bi";

interface ProvinciaListProps {
    provincias: ProvinciaModel[];
    onEditar: (provincia: ProvinciaModel) => void;
    onEliminar: (provincia: ProvinciaModel) => void;
}

const ProvinciaList: React.FC<ProvinciaListProps> = ({provincias,onEditar,onEliminar}) => {
    const headers = ["ID", "Descripcion","Departamento", "Status", "Creacion", "Modificacion","Acciones"];

    return (
        <Table headers={headers}>
            <Tbody>
                {provincias.map((provincia) => (
                    <Tr key={provincia.id}>
                        <Td>{provincia.id}</Td>
                        <Td>{provincia.descripcion}</Td>
                        <Td>{provincia.Departamento.descripcion}</Td>
                        <Td>{provincia.status ? <Badge color="success">ACTIVO</Badge> : <Badge color="danger">INACTIVO</Badge> }</Td>
                        <Td>{format(new Date(provincia.created_at), 'yyyy-MM-dd')}</Td>
                        <Td>{format(new Date(provincia.updated_at), 'yyyy-MM-dd')}</Td>
                        <Td className="flex justify-center">
                            <Button color="info" icon={<BiPencil />} onClick={()=>onEditar(provincia)} >Editar</Button>
                            <Button color="danger" icon={<BiTrash />} onClick={()=>onEliminar(provincia)}>Eliminar</Button>  
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}

export default ProvinciaList;