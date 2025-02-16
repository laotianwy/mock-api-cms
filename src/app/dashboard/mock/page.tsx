/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 18:03:14
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 18:00:05
 * @FilePath: /mock-api-cms/src/app/dashboard/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { atomUserInfo } from '@/atom/user';
import { useAtomValue } from 'jotai';
import { Button } from 'antd';
import { useLogout } from '@/hooks/useLogout';

const MockPage = () => {
    const globalUserInfo = useAtomValue(atomUserInfo);
    const logout = useLogout();

    return (
        <div>
            mock page {globalUserInfo?.username}
            <Button type="primary" onClick={logout}>
                退出登录
            </Button>
        </div>
    );
};

export default MockPage;
