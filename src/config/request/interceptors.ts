/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-01-06 23:39:38
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-19 15:49:20
 * @FilePath: /cli/src/utils/apiGenTs/runProjectTemplate/interceptors.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { message } from 'antd';
import { isSSR } from '@/const';
import { api, apiInstanceList } from '../../service';
import wrapperRequestHeaderSSR from './interceptorsRequest/wrapperRequestHeaderSSR';
import wrapperRequestHeaderCSR from './interceptorsRequest/wrapperRequestHeaderCSR';
import wrapperResponseHeaderSSR from './interceptorsResponse/wrapperResponseHeaderSSR';
import responseInterceptorCSR from './interceptorsResponse/responseInterceptorCSR';

// Loop through apiInstanceList and apply request interceptor
apiInstanceList.forEach(async (item) => {
    item.instance.instance.interceptors.request.use(
        isSSR() ? wrapperRequestHeaderSSR : wrapperRequestHeaderCSR,
    );
    item.instance.instance.interceptors.response.use(
        isSSR() ? wrapperResponseHeaderSSR : responseInterceptorCSR,
        function (response) {
            if (response?.response?.data?.code === 400) {
                message.error(response.response.data.message);
            }
            return Promise.reject(response);
        },
    );
});

export const interceptorsRequest = api;
