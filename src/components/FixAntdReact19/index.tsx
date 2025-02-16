/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-17 03:24:33
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-17 03:29:50
 * @FilePath: /mock-api-cms/src/components/FixAntdReact19/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { PropsWithChildren } from 'react';
import '@ant-design/v5-patch-for-react-19';

/** 修复antd5 适配 react19问题 */
const FixAntdReact19 = ({ children }: PropsWithChildren) => {
    return children;
};

export default FixAntdReact19;
