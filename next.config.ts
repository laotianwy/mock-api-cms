/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-14 19:02:07
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 15:00:23
 * @FilePath: /mock-api-cms/next.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost', // 使用 localhost
                port: '3000', // 指定端口
                pathname: '/mock/user/getCaptcha', // 图片路径
            },
        ],
    },
};

export default nextConfig;
