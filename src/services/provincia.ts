
import { ApiResponse } from "@/types/apiResponse";
import apiClient from "./apiClient";
import { ProvinciaModel } from "@/types/provinciaModel";

export class ProvinciaService {

    static async get(): Promise<ApiResponse<ProvinciaModel[]>> {
        const response = await apiClient.get("/provincia");
        
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