import { ApiError, type ApiErrorResponse, type ApiSuccessResponse } from "@/types/api.type";
import axios, {
    AxiosError,
    HttpStatusCode,
    type AxiosInstance,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// Event emitter để notify về logout
type AuthEventListener = () => void;
class AuthEventEmitter {
    private listeners: AuthEventListener[] = [];

    subscribe(listener: AuthEventListener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }

    emit() {
        this.listeners.forEach((listener) => listener());
    }
}

export const authEventEmitter = new AuthEventEmitter();

const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

apiClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        try {
            //
        } catch (error) {
            console.error("Error getting token:", error);
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response: AxiosResponse<ApiSuccessResponse>) => {
        // Return data directly nếu success
        return response;
    },
    async (error: AxiosError<ApiErrorResponse>) => {
        // console.log("🚀 ~ error:", JSON.stringify(error.response, null, 2));
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        // Handle 401 - Unauthorized
        if (error.response?.status === HttpStatusCode.Unauthorized && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await axios.post(
                    `${API_BASE_URL}/auth/refresh-from-cookie`,
                    {},
                    { withCredentials: true }
                );

                return apiClient(originalRequest);
            } catch (refreshError) {
                console.log("🚀 ~ refreshError:", refreshError);

                authEventEmitter.emit(); // Notify về việc logout

                throw new ApiError(
                    HttpStatusCode.Unauthorized,
                    "UNAUTHORIZED",
                    "Session has expired"
                );
            }
        }

        console.log("🚀 ~ error:", error);
        
        if (error.message === "Network Error") {
            throw new ApiError(0, "NETWORK_ERROR", "No network connection");
        }
        console.log("🚀 ~ error.response:", JSON.stringify(error.response, null, 2));

        // Transform error response
        if (error.response?.data || error.response?.status) {
            const errorResponse = error.response.data;
            throw ApiError.fromResponse(errorResponse, error.response.status || error.status!);
        }

        // Network error
        if (error.code === "ECONNABORTED") {
            throw new ApiError(408, "TIMEOUT", "The request has timed out");
        }

        if (!error.response) {
            throw new ApiError(0, "NETWORK_ERROR", "No network connection");
        }

        throw new ApiError(500, "UNKNOWN_ERROR", "An unknown error occurred");
    }
);

export default apiClient;
