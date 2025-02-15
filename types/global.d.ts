/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 19:23:53
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 19:24:00
 * @FilePath: /mock-api-cms/types/global.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare global {
    export interface ApiBaseResponse<T = unknown> {
        message: string;
        code: number;
        data?: T;
    }
}

export {};
