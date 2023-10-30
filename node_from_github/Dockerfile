FROM node 

WORKDIR /developer/node-js/app_from_github

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/SahooAbhijeet/Dockerizing_node_project.git .

ENV PORT=7000

EXPOSE 7000
RUN npm ci

CMD ["npm", "start"]

# docker build -t app-from-github-with-env .
# docker run -it --init --publish 7001:7000 app-from-github-with-env 
# docker run -it --init -p 7005:7005 app-from-github-with-env
# docker run -it --init -P app-from-github-with-env
