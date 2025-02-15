/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 18:00:01
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 19:31:58
 * @FilePath: /mock-api-cms/src/app/dashboard/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use server';
import HydrateUserInfo from '@/component/HydrateUserInfo';
import { request } from '@/config/request';
import { GLOBAL_USER_TOKEN } from '@/const';
import { cookies } from 'next/headers';

interface DashBoardLayoutProps {
    children: React.ReactNode;
}

const getUserInfo = async (userToken?: string) => {
    if (!userToken) return undefined;
    const userInfo = await request.globalApi.mock.userFindUserInfo();
    return userInfo.data;
};

const DashBoardLayout = async (props: DashBoardLayoutProps) => {
    const { children } = props;
    const cookieStore = await cookies();
    const userToken = cookieStore.get(GLOBAL_USER_TOKEN);

    // 服务器端获取用户信息
    const getUserInfoBySSR = await getUserInfo(userToken?.value);
    return (
        <HydrateUserInfo userInfo={getUserInfoBySSR}>
            {children}
        </HydrateUserInfo>
    );
};

export default DashBoardLayout;
