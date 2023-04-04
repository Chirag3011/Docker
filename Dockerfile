FROM ubuntu:16.04
MAINTAINER Chirag Sharma "chiragsharmacsebca@gmail.com"
ENV REFRESHED_AT 2023-04-04
RUN apt-get -yqq update; apt-get -yqq install nginx
RUN mkdir -p /var/www/html/website
ADD ${PWD}/nginx/global.conf /etc/nginx/conf.d/ 
ADD ${PWD}/nginx/nginx.conf /etc/nginx/nginx.conf
VOLUME myvolume
EXPOSE 80
