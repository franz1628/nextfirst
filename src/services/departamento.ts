import { ApiResponse } from "@/types/apiResponse";
import apiClient from "./apiClient";
import { DepartamentoModel } from "@/types/departamentoModel";

export class DepartamentoService {
    static async get():Promise<ApiResponse<DepartamentoModel[]>>{ 
        const response = await apiClient.get("/departamento");
        return response.data
    }

    static async create(data: Partial<DepartamentoModel>): Promise<ApiResponse<DepartamentoModel>> {
        const response = await apiClient.post("/departamento", data);
        return response.data
    }

    static async update(id: number, data: Partial<DepartamentoModel>): Promise<ApiResponse<DepartamentoModel>> {
        const response = await apiClient.put(`/departamento/${id}`, data);
        return response.data
    }

    static async delete(id: number): Promise<ApiResponse<DepartamentoModel>> {
        const response = await apiClient.delete(`/departamento/${id}`);
        return response.data
    }
}