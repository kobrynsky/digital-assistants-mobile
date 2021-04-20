import axios, { AxiosRequestConfig } from "axios";
import store from "../state/store";
import { AuthApi } from "./endpoints/authApi";

export const BASE_URL = 'https://b69bcb836cac.ngrok.io/api/'

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
    (config) => {
        // token interceptor goes here
        const token = store.getState()?.auth?.token;
        if (token) config.auth = { username: token, password: 'x' };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.defaults.withCredentials = true;

export const requests = {
    get: (url: string, params?: {}) =>
        axios
            .get(url, {
                params,
            },
            ),

    post: (url: string, body: {}, config?: AxiosRequestConfig | undefined) =>
        axios.post(url, body, config),

    put: (url: string, body: {}, config?: AxiosRequestConfig | undefined) =>
        axios.put(url, body, config),

    delete: (url: string) => axios.delete(url),
};

const agent = {
    Auth: AuthApi,
};

export default agent;

