FROM node:10-alpine
COPY build/release /app
COPY node_modules /app/node_modules
COPY service.yaml /app
WORKDIR /app
CMD ["/usr/local/bin/node", "node_modules/@frogfish/engine/engine", "-c", "service.yaml"]
EXPOSE 8000