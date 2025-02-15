/* eslint-disable @next/next/no-img-element */
/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-14 23:24:14
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 01:51:22
 * @FilePath: /mock-api-cms/src/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { serviceConfig } from '@/config/request/swaggerServiceConfig';
import { Button } from 'antd';
export default function Home() {
    const btnClick = async () => {
        console.log('btnClick');
    };
    return (
        <main>
            <img
                src={`${serviceConfig.baseURL}/mock/user/getCaptcha`}
                alt="getCaptcha"
            />
            <Button onClick={btnClick}>Hello World</Button>
        </main>
    );
}
