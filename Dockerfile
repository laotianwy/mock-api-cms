# 使用 Node.js 官方镜像作为基础镜像
FROM node:20-slim AS builder

# 设置工作目录
WORKDIR /app
 
# 复制 package.json 和 package-lock.json
COPY package.json pnpm-lock.yaml ./


# 更换为淘宝镜像，合并命令减少层数，设置镜像并安装 PNPM
RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm && \
    pnpm install

# 复制项目文件到容器内
COPY . .

# 确保依赖已安装后再执行脚本
RUN pnpm build


# production stage
FROM node:20-slim AS production-stage

# 设置工作目录
WORKDIR /mock-app

# 复制构建好的文件
COPY --from=builder /app/.next /mock-app/.next
COPY --from=builder /app/package.json /mock-app/package.json
COPY --from=builder /app/pnpm-lock.yaml /mock-app/pnpm-lock.yaml

# 下载生产环境依赖
RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm && \
    pnpm install && \
    pnpm install --production

# 设置端口
EXPOSE 80

# 启动
ENTRYPOINT pnpm start
