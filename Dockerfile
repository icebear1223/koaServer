#制定node镜像版本
FROM node:8.9-alpine

#作者
MAINTAINER icebear

#移动到当前目录下面的文件到app目录下
ADD . /app/

#进入到app目录下面，类似cd
WORKDIR /app

#安装依赖
RUN npm install

#对外暴露的端口 3000
EXPOSE 3000

#程序启动脚本
CMD ["npm","start"]