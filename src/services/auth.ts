import { ApiResponse } from "@/types/apiResponse";
import apiClient from "./apiClient";
import { AuthModel } from "@/types/authModel";

export class AuthService {

    static async login(data: Partial<AuthModel>):Promise<AuthResponse>{ 
        const response = await apiClient.post("/auth/login",data);

        
        return response.data
    }

    static async get():Promise<ApiResponse<AuthModel[]>>{ 
        const response = await apiClient.get("/auth");
        return response.data
    }

    static async create(data: Partial<AuthModel>): Promise<ApiResponse<AuthModel>> {
        const response = await apiClient.post("/auth", data);
        return response.data
    }

    static async update(id: number, data: Partial<AuthModel>): Promise<ApiResponse<AuthModel>> {
        const response = await apiClient.put(`/auth/${id}`, data);
        return response.data
    }

    static async delete(id: number): Promise<ApiResponse<AuthModel>> {
        const response = await apiClient.delete(`/auth/${id}`);
        return response.data
    }
}