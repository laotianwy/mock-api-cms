/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-01-06 23:39:38
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 19:30:12
 * @FilePath: /cli/src/utils/apiGenTs/runProjectTemplate/interceptors.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { api, apiInstanceList } from '../../service';
import jsCookie from 'js-cookie'; // 使用 js-cookie 库来处理 cookies
import { GLOBAL_USER_TOKEN, isSSR } from '@/const';

// Wrapper function to set request headers
const wrapperRequestHeaderCSR = async (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    const userToken = jsCookie.get(GLOBAL_USER_TOKEN);
    if (userToken) {
        config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
};

const wrapperRequestHeaderSSR = async (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    const importSSRcookie = await import('next/headers');
    const cookies = importSSRcookie.default.cookies;
    const userToken = (await cookies()).get(GLOBAL_USER_TOKEN);
    if (userToken) {
        config.headers.Authorization = `Bearer ${userToken.value}`;
    }
    return config;
};

// Response interceptor
const responseInterceptor = async (
    response: AxiosResponse<ApiBaseResponse, unknown>,
) => {
    // 对返回的数据做处理。需要什么类型的数据
    if (response.data?.code === 200) {
        return Promise.resolve(response);
    }

    // 请求失败reject掉的数据
    return Promise.reject(response);
};

// Loop through apiInstanceList and apply request interceptor
apiInstanceList.forEach(async (item) => {
    item.instance.instance.interceptors.request.use(
        isSSR() ? wrapperRequestHeaderSSR : wrapperRequestHeaderCSR,
    );
    item.instance.instance.interceptors.response.use(
        responseInterceptor,
        function (error) {
            return Promise.reject(error);
        },
    );
});

export const interceptorsRequest = api;
