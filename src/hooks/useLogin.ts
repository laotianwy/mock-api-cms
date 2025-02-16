/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-16 18:23:37
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 18:28:25
 * @FilePath: /mock-api-cms/src/hooks/useLogin.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from '@/config/request';
import { GLOBAL_USER_TOKEN } from '@/const';
import { LoginUserDTO } from '@/service/globalApi';
import jsCookie from 'js-cookie'; // 使用 js-cookie 库来处理 cookies
import { useRouter } from 'next/navigation';

interface rediceProps {
    goback?: boolean;
    rediceUrl?: string;
}
/**
 * @returns 登录成功执行的方法
 */
export const useLogin = () => {
    const navigate = useRouter();

    return async (userFormData: LoginUserDTO, rediceData?: rediceProps) => {
        const { rediceUrl, goback } = rediceData ?? {};
        const res = await request.globalApi.mock.userLogin(userFormData, {
            withCredentials: true,
            useMock: false,
        });

        jsCookie.set(GLOBAL_USER_TOKEN, res.data);

        if (goback) {
            navigate.back();
            return;
        }
        navigate.replace(rediceUrl ?? '/dashboard');
    };
};
