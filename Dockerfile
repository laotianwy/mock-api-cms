# 使用 Node.js 官方镜像作为基础镜像
FROM node:20-slim AS builder

# 设置工作目录
WORKDIR /app
 
# 复制 package.json 和 package-lock.json
COPY package.json pnpm-lock.yaml ./

# install pnpm 
RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm 

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制项目文件到容器内
COPY . .

# 确保依赖已安装后再执行脚本
RUN pnpm build

# ---------------------------------------------------------------------------------------------------
# production stage
FROM node:20-slim AS production-stage

# 设置工作目录
WORKDIR /mock-app

# 复制构建好的文件
COPY --from=builder /app/.next/standalone /mock-app

# 设置环境端口
ENV PORT=80
ENV HOSTNAME=0.0.0.0

# 设置端口
EXPOSE 80

# 启动
ENTRYPOINT node server.js
