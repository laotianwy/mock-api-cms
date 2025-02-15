/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 18:06:45
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 19:06:12
 * @FilePath: /mock-api-cms/src/const/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/** 客户端cookie存储的用户token */
export const GLOBAL_USER_TOKEN = 'GLOBAL_USER_TOKEN';

/** 是否服务器端渲染 */
export const isSSR = () => typeof window === 'undefined';
