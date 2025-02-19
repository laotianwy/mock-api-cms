/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 18:03:14
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 18:08:27
 * @FilePath: /mock-api-cms/src/app/dashboard/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { atomUserInfo } from '@/atom/user';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
const DashboardPage = () => {
    const globalUserInfo = useAtomValue(atomUserInfo);
    return (
        <div>
            <Link href="/dashboard/mock">mock page</Link>
            {globalUserInfo?.nick_name}
        </div>
    );
};

export default DashboardPage;
