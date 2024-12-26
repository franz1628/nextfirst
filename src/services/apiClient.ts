
import axios from "axios";
import { log } from "console";
import Swal from "sweetalert2";


const apiClient = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        Swal.fire({
            showConfirmButton: false,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading(); // Mostrar el loading
            },
          });
        return config;
    },
    (error) => {
        Swal.fire({});
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        Swal.close();
        return response;
    },
    (error) => {
        Swal.fire({
            title: "Error",
            icon: "error",
            text: 'Error en el servidor',
        });
        return Promise.reject(error);
    }
);

export default apiClient;
