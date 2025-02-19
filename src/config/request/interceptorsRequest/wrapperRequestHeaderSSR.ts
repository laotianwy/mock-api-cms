/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-19 15:44:17
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-19 15:44:24
 * @FilePath: /mock-api-cms/src/config/request/interceptorsRequest/wrapperRequestHeaderSSR.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { InternalAxiosRequestConfig } from 'axios';
import { axiosMockWrapper } from 'tianzhitong-cli/dist/adapters';
import { GLOBAL_USER_TOKEN } from '@/const';

const wrapperRequestHeaderSSR = async (config: InternalAxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    const importSSRcookie = await import('next/headers');
    const cookies = await importSSRcookie.cookies();
    const userToken = cookies.get(GLOBAL_USER_TOKEN);
    if (userToken) {
        config.headers.Authorization = `Bearer ${userToken.value}`;
    }

    axiosMockWrapper(config, {
        mockBaseUrl: 'http://localhost:3000',
    });
    return config;
};

export default wrapperRequestHeaderSSR;
