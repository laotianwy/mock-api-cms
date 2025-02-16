/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 18:19:48
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 17:40:03
 * @FilePath: /mock-api-cms/src/component/HydrateUserInfo/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { atomUserInfo } from '@/atom/user';
import { UserEntity } from '@/service/globalApi';
import { useHydrateAtoms } from 'jotai/utils';

interface HydrateSSRdataProps {
    userInfo?: UserEntity;
    children: React.ReactNode;
}

const HydrateSSRdata = ({ children, userInfo }: HydrateSSRdataProps) => {
    useHydrateAtoms([[atomUserInfo, userInfo]]);
    return children;
};

export default HydrateSSRdata;
