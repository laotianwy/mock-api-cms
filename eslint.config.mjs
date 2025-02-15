/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-14 19:02:07
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-14 19:23:29
 * @FilePath: /mock-api-cms/eslint.config.mjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    /** JS 推荐配置 */
    eslint.configs.recommended,
    /** TS 推荐配置 */
    ...tseslint.configs.recommended,
    /** Stylistic 自定义规则 */
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
        braceStyle: '1tbs',
        arrowParens: 'always',
    }),
    eslintPluginPrettierRecommended,
];

export default eslintConfig;
