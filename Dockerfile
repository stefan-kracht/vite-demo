FROM node:18 as build

ARG FULL_VERSION

RUN echo "building $FULL_VERSION"
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]