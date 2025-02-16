/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-16 14:59:53
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 16:05:53
 * @FilePath: /mock-api-cms/types/module/axios.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'axios'; // 确保导入 axios 模块

declare module 'axios' {
    export interface AxiosRequestConfig {
        useMock?: boolean;
    }
}
