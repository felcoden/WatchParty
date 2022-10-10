FROM node:8

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]