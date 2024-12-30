
import { ApiResponse } from "@/types/apiResponse";
import apiClient from "./apiClient";
import { ProvinciaModel } from "@/types/provinciaModel";
import { ResponsePagination } from "@/types/responsePagination";


export class ProvinciaService {

    static async get(): Promise<ApiResponse<ProvinciaModel[]>> {
        const response = await apiClient.get("/provincia");
        
        return response.data
    }

    static async getPaginado(page:number=1, limit:number=10,buscar:string): Promise<ApiResponse<ResponsePagination<ProvinciaModel[]>>> {
        const response = await apiClient.get("/provincia/findAllPaginado",{
            params : {
                page,
                limit,
                buscar
            }
        });
        
        return response.data
    }

    static async create(data: Partial<ProvinciaModel>): Promise<ApiResponse<ProvinciaModel>> {
        const response = await apiClient.post("/provincia", data);
        return response.data
    }

    static async update(id: number, data: Partial<ProvinciaModel>): Promise<ApiResponse<ProvinciaModel>> {
        const response = await apiClient.put(`/provincia/${id}`, data);
        return response.data
    }

    static async delete(id: number): Promise<ApiResponse<ProvinciaModel>> {
        const response = await apiClient.delete(`/provincia/${id}`);
        return response.data
    }

 
}