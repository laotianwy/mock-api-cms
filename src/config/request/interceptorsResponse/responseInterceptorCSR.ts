/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-19 15:47:17
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-19 15:47:26
 * @FilePath: /mock-api-cms/src/config/request/interceptorsResponse/responseInterceptorCSR.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { message } from 'antd';
import { AxiosResponse } from 'axios';

// Response interceptor
const responseInterceptorCSR = async (
    response: AxiosResponse<ApiBaseResponse, unknown>,
) => {
    // 对返回的数据做处理。需要什么类型的数据
    if (response.data?.code === 200) {
        return Promise.resolve(response);
    }

    if (response?.data?.code === 400) {
        message.error(response.data?.message);
    }
    // 请求失败reject掉的数据
    return Promise.reject(response);
};

export default responseInterceptorCSR;
