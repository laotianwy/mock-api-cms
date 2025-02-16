/*
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-17 01:34:53
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-17 01:39:39
 * @FilePath: /mock-api-cms/src/app/auth/login/component/SeoHeader/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Head from 'next/head';

interface SeoHeaderProps {
    /** 页面标题 */
    title: string;
    /** 描述 */
    description: string;
    /** 关键字 */
    keywords: string;
    /** 作者 */
    author: string;
}

const SeoHeader = (props: SeoHeaderProps) => {
    const { title, description, keywords, author } = props;
    return (
        <>
            <h1 className="hidden">{title}</h1>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
            </Head>
        </>
    );
};

export default SeoHeader;
