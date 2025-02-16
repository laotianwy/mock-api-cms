/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-17 01:24:46
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-17 01:25:59
 * @FilePath: /mock-api-cms/src/app/auth/login/component/LoginModule/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { serviceConfig } from '@/config/request/swaggerServiceConfig';
import { useLogin } from '@/hooks/useLogin';
import { startTransition, useActionState } from 'react';

const LoginModule = () => {
    const loginAction = useLogin();

    const [, formAction, isPending] = useActionState(
        (_: any, formData: any) => {
            startTransition(async () => {
                await loginAction({
                    username: 'admin',
                    password: '123456',
                    captcha: formData.get('captcha'),
                });
            });
        },
        undefined,
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 阻止默认表单提交和重置行为
        const formData = new FormData(event.target as HTMLFormElement);
        formAction(formData);
    };
    return (
        <div>
            <img
                src={`${serviceConfig.baseURL}/mock/user/getCaptcha`}
                alt="capacha"
            />
            <form onSubmit={handleSubmit}>
                <input type="text" name="captcha" placeholder="用户名" />
                <button type="submit" disabled={isPending}>
                    login
                </button>
            </form>
        </div>
    );
};

export default LoginModule;
