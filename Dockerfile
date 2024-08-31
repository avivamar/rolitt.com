# 使用 Node.js 镜像作为基础镜像构建
FROM node:20

ENV NODE_ENV=production
# 禁用 husky 钩子
ENV HUSKY=0

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

RUN apt-get update && apt-get install -y libssl-dev

RUN node --version

# 安装依赖
RUN npm install

# 复制应用程序代码
COPY . .

# 使用 dotenv-vault 拉取 .env 文件
# RUN npx -y dotenv-vault@latest pull production --dotenvMe=me_2a7144e37c3870d070d812ca5b59eec761c6b565ac5ccf1c7a1538950bf5d5c5 
COPY .env.vault ./

# 将 DOTENV_KEY 环境变量传递给容器
ARG DOTENV_KEY
ENV DOTENV_KEY=${DOTENV_KEY}

# RUN cat .env.production
# RUN cp .env.production .env.local

# 生成 db orm client
RUN npm run db:generate

# 构建应用
RUN npm run build

# 暴露端口，这应该与你的应用实际使用的端口一致
EXPOSE 3000

# 运行应用
CMD [ "bun", "run", "start" ]
