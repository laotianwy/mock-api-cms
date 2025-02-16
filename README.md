<!--
 * @Author: laotianwy 1695657342@qq.com
 * @Date: 2025-02-15 20:12:21
 * @LastEditors: laotianwy 1695657342@qq.com
 * @LastEditTime: 2025-02-16 21:40:00
 * @FilePath: /mock-api-cms/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# mock-api-cms
mock-js-后台管理系统

PORT=80 node .next/standalone/server.js

docker build -t mock-api-cms .

docker run --name mock-ssr -d -p 80:80 mock-api-cms:latest

# 服务器扔文件
scp -r ./restart_service.sh root@1.95.80.219:/mock-app-cms

# 构建镜像
docker buildx build \
  --platform linux/amd64 \
  --cache-from=type=local,src=./ssr1 \
  --cache-to=type=local,dest=./ssr2 \
  -t tianzhitong/mock-app-cms:latest --push .

## Getting Started

First, run the development server:

```bash
pnpm dev
```

