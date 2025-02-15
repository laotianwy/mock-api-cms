/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 18:13:36
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 18:15:19
 * @FilePath: /mock-api-cms/src/atom/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { UserEntity } from '@/service/globalApi';
import { atom } from 'jotai';

export const atomUserInfo = atom<UserEntity | undefined>(undefined);
