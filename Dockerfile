FROM node:12
WORKDIR /app
COPY package.json /app
# use taobao
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
COPY . /app
EXPOSE 8900
CMD npm start
