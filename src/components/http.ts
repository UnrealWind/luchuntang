import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useUserStore } from '/@/store/modules/user';

// baseURL
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const instance = axios.create({
  baseURL: BASE_URL as string,
  withCredentials: true,
  // ty部分接口响应实在是太慢了
  timeout: 120000,
});

const userStore = useUserStore();

instance.interceptors.request.use(
  (config) => {
    // 请求头 token配置
    const token = userStore.getToken;
    const tenantId = userStore.getTenantId;
    if (token) {
      config.headers = {
        ...config.headers,
        'X-Access-Token': token,
        'tenant-id': tenantId,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log('err' + error); // for debug
    // 没权限时，不再重复提示
    if (error === '没有操作权限') return;
  },
);

const request = <T = any>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  if (typeof config === 'string') {
    if (!options) {
      return instance.request<T, T>({
        url: config,
      });
      // throw new Error('请配置正确的请求参数');
    } else {
      return instance.request<T, T>({
        url: config,
        ...options,
      });
    }
  } else {
    return instance.request<T, T>(config);
  }
};
export function get<T = any>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' }, options);
}

export function post<T = any>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> {
  return request({ ...config, method: 'POST' }, options);
}

export default request;
export type { AxiosInstance, AxiosResponse };
