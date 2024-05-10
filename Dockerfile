# # 构建阶段
# FROM node:18.15-alpine as build

# # 设置 npm 镜像源为淘宝镜像
# RUN npm config set registry https://registry.npm.taobao.org

# # 设置工作目录
# WORKDIR /app

# # 复制项目文件到工作目录
# COPY . /app

# # 安装项目依赖
# RUN npm install

# # 构建项目
# RUN npm run build

# 部署阶段
FROM nginx:1.21.0-alpine

# 从构建阶段复制构建的静态文件到 Nginx 目录
# COPY --from=build /app/build /usr/share/nginx/html
COPY ./build /usr/share/nginx/html

# 暴露端口 80
EXPOSE 80

# 使用默认的 Nginx 配置
CMD ["nginx", "-g", "daemon off;"]
