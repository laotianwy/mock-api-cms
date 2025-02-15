/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-14 19:13:29
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 19:41:44
 * @FilePath: /mock-api-cms/src/app/auth/login/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { request } from '@/config/request';
import { startTransition, useActionState } from 'react';
import jsCookie from 'js-cookie';
import { GLOBAL_USER_TOKEN } from '@/const';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();
    const [_, formAction, isPending] = useActionState((_, formData) => {
        startTransition(async () => {
            const res = await request.globalApi.mock.userLogin(
                {
                    username: 'admin',
                    password: '123456',
                    captcha: formData.get('captcha'),
                },
                {
                    withCredentials: true,
                },
            );
            jsCookie.set(GLOBAL_USER_TOKEN, res.data);
            router.replace('/dashboard');
        });
    }, undefined);

    const handleSubmit = (event) => {
        event.preventDefault(); // 阻止默认表单提交和重置行为
        const formData = new FormData(event.target);
        formAction(formData);
    };
    return (
        <div>
            <img src="http://localhost:3000/mock/user/getCaptcha" />
            <form onSubmit={handleSubmit}>
                <input type="text" name="captcha" placeholder="用户名" />
                <button type="submit" disabled={isPending}>
                    login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
