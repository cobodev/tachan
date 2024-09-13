import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

const AXIOS_DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  withCredentials: true,
};

/** Instancia de Axios */
const axiosInstance: AxiosInstance = axios.create(AXIOS_DEFAULT_CONFIG);

/** Request interceptor */
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => config);

/** Response interceptor */
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
