/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-14 19:13:29
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-19 18:22:34
 * @FilePath: /mock-api-cms/src/app/auth/login/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Suspense } from 'react';
import LoginForm from './component/LoginForm';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: 'mock-api-cms login',
        description: '这是一个登录页面',
        keywords: '登录, laotianwy, tianzhitong',
        authors: [
            {
                name: 'laotianwy',
                url: 'https://github.com/laotianwy/mock-api-cms',
            },
            {
                name: 'tianzhitong',
                url: 'https://github.com/laotianwy/mock-api-server',
            },
        ],
    };
};

const LoginPage = () => {
    return (
        <div
            className="w-screen h-screen bg-no-repeat bg-cover flex justify-center items-center"
            style={{
                backgroundImage: 'url(/images/user/login-bg.png)',
            }}
        >
            <h1 className="hidden">mock-api-cms login</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
            </Suspense>
        </div>
    );
};

export default LoginPage;
