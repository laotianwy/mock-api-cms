/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 14:08:59
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-18 18:35:43
 * @FilePath: /mock-api-cms/tailwind.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Config } from 'tailwindcss';

export default {
    mode: 'jit', // 确保 JIT 模式已启用
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            backgroundImage: {
                'login-bg': 'url(/public/images/user/login-bg.png)',
            },
        },
        screens: {
            // 手机端
            mo: { max: '840px' },
            // pad 端
            pad: { min: '841px', max: '1200px' },
            // pc 端
            pc: { min: '1201px' },
        },
    },
    plugins: [],
} satisfies Config;
