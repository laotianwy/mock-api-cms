/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-16 17:48:01
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 17:59:06
 * @FilePath: /mock-api-cms/src/hooks/useLogout.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { atomUserInfo } from '@/atom/user';
import { GLOBAL_USER_TOKEN } from '@/const';
import { useSetAtom } from 'jotai';
import jsCookie from 'js-cookie'; // 使用 js-cookie 库来处理 cookies
import { useRouter } from 'next/navigation';

/**
 * 封装退出hook
 * @param rediceUrl 退出重定向的地址url 默认是登录页面
 * @returns
 */
export const useLogout = (rediceUrl: string | undefined = '/auth/login') => {
    const setGlobalUserInfo = useSetAtom(atomUserInfo);
    const navigate = useRouter();

    return () => {
        setGlobalUserInfo(undefined);
        jsCookie.remove(GLOBAL_USER_TOKEN);
        navigate.replace(rediceUrl);
    };
};
