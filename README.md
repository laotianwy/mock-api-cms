<!--
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 20:12:21
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-15 23:01:46
 * @FilePath: /mock-api-cms/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# mock-api-cms
mock-js-后台管理系统

PORT=80 node .next/standalone/server.js

docker build -t mock-api-cms .

docker run --name mock-ssr -d -p 80:80 mock-api-cms:latest

# 打包镜像
docker buildx build \
  --platform linux/amd64 \
  --cache-from=type=local,src=./ssr \
  --cache-to=type=local,dest=./ssr1 \
  -t tianzhitong/mock-app-cms:latest --push .

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
