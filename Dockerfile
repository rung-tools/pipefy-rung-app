FROM nginx:1.12-alpine

RUN rm /usr/share/nginx/html/ -r

COPY public/ /usr/share/nginx/html/
