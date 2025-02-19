/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-19 15:45:28
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-19 15:45:36
 * @FilePath: /mock-api-cms/src/config/request/interceptorsRequest/wrapperRequestHeaderCSR.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import jsCookie from 'js-cookie'; // 使用 js-cookie 库来处理 cookies
import { GLOBAL_USER_TOKEN } from '@/const';
import { InternalAxiosRequestConfig } from 'axios';
import { axiosMockWrapper } from 'tianzhitong-cli/dist/adapters';

// Wrapper function to set request headers
const wrapperRequestHeaderCSR = async (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    const userToken = jsCookie.get(GLOBAL_USER_TOKEN);
    if (userToken) {
        config.headers.Authorization = `Bearer ${userToken}`;
    }
    axiosMockWrapper(config, {
        mockBaseUrl: 'http://localhost:3000',
    });
    return config;
};

export default wrapperRequestHeaderCSR;
