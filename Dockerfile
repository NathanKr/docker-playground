# create the image from nginx
FROM nginx:latest

# define the image working directory
WORKDIR /usr/share/nginx/html

# copy from local current directory to the working directoy defined above
COPY . . 