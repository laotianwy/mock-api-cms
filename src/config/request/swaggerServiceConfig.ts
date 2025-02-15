/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-01-06 18:33:58
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 21:46:30
 * @FilePath: /cli/src/utils/apiGenTs/runProjectTemplate/swaggerServiceConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export interface serviceConfigProps {
    baseURL: string;
}

export const serviceConfig = (() => {
    const baseURL =
        process.env.NODE_ENV === 'production'
            ? 'http://1.95.80.219:3000'
            : 'http://localhost:3000';

    return {
        // 所有接口的baseUrl地址
        baseURL,
    };
})();
