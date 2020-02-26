FROM node:12.9.1-alpine

# install tools
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /app
COPY package.json /app
# use taobao
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
#git clone my lib
RUN cd ./node_modules && \
	git clone https://github.com/niexiaoguang/vue-wechat-login.git
COPY . /app
EXPOSE 8900
CMD npm start
