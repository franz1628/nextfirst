import { ApiResponse } from "@/types/apiResponse";
import { PaisModel } from "@/types/paisModel";
import apiClient from "./apiClient";

export class PaisService{
    static async get():Promise<ApiResponse<PaisModel[]>>{ 
        const response = await apiClient.get("/pais");
        return response.data
    }

    static async create(data: Partial<PaisModel>): Promise<ApiResponse<PaisModel>> {
        const response = await apiClient.post("/pais", data);
        return response.data
    }

    static async update(id: number, data: Partial<PaisModel>): Promise<ApiResponse<PaisModel>> {
        const response = await apiClient.put(`/pais/${id}`, data);
        return response.data
    }

    static async delete(id: number): Promise<ApiResponse<PaisModel>> {
        const response = await apiClient.delete(`/pais/${id}`);
        return response.data
    }
} 