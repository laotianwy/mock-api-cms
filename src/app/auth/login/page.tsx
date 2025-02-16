/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-14 19:13:29
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-17 01:38:40
 * @FilePath: /mock-api-cms/src/app/auth/login/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SeoHeader from '@/components/SeoHeader';
import LoginModule from './component/LoginModule';

const LoginPage = () => {
    return (
        <div>
            <SeoHeader
                title="mock-api-cms login"
                description="这是一个登录页面"
                keywords="登录 laotianwy cms"
                author="laotianwy"
            />
            <LoginModule />
        </div>
    );
};

export default LoginPage;
