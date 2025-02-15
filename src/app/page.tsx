/* eslint-disable @next/next/no-img-element */
/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-14 23:24:14
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 15:45:11
 * @FilePath: /mock-api-cms/src/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { request } from '@/config/request';

export default function Home() {
    const btnClick = async () => {
        request.globalApi.mock.userGetCaptcha();
        console.log('btnClick');
    };
    return (
        <main>
            <img
                src="http://localhost:3000/mock/user/getCaptcha?a=1"
                alt="getCaptcha"
            />
            <button onClick={btnClick}>Hello World</button>
        </main>
    );
}
