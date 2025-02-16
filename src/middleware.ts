/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-16 16:40:31
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 16:58:45
 * @FilePath: /mock-api-cms/src/app/middleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { GLOBAL_USER_TOKEN } from './const';

export const middleware = (request: NextRequest) => {
    // 获取请求的路径
    const path = request.nextUrl.pathname;

    // 检查用户是否已登录（假设使用 cookie 存储 token）
    const token = request.cookies.get(GLOBAL_USER_TOKEN)?.value;

    // 如果用户未登录且访问的是受保护的路径
    if (!token && path.startsWith('/dashboard')) {
        // 重定向到登录页面
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // 如果用户已登录且访问的是登录页面，重定向到首页
    if (token && path === '/auth/login') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // 继续请求
    return NextResponse.next();
};

// 配置中间件应用的路径
export const config = {
    matcher: [
        '/dashboard/:path*', // 匹配 /dashboard 下的所有路径
        '/auth/login', // 匹配登录页面
    ],
};
