# Install

Este proyecto esta desarrollado con webpack.

```
yarn install
```

# Develop

```
yarn dev
```

```
    "start:dev": "node ./build/cli-tools.js --clear dist --create dist && webpack-dev-server --config ./build/webpack.config.client.dev.js",
    "start:prod": "node ./build/cli-tools.js --clear dist --create dist && webpack-dev-server --config ./build/webpack.config.client.prod.js",
```

```
    /build/webpack.config.client.prod.js
```

Configuraciones de ambiente.

# Build static site

Segun corresponda ejecutar.

```
yarn build:dev
yarn build:prod
```

Lo anterior generara una carpeta, dist, la cual se utilizara para desplegar el proyecto en heroku o similar a travez de un web server

Puedes corroborar esto inicializando yarn start, lo cual inicia un server de node express y expone la carpeta en el puerto 8080 o como indica server.js const port = process.env.PORT || 8080;

```
yarn start
```
