FROM nginx:alpine
EXPOSE 80/tcp
COPY . /usr/share/nginx/html