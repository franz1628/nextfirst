
import axios from "axios";
import { log } from "console";
import Swal from "sweetalert2";


const apiClient = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
    
});

apiClient.interceptors.request.use(
    (config) => {
        
        return config;
    },
    (error) => {
     
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        
        return response;
    },
    (error) => {
       
        return Promise.reject(error);
    }
);

export default apiClient;
