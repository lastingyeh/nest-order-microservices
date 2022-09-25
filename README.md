# NestJS practice notes

### initialize apps

```
# create app
$ nest new ordering-app
$ nest g app orders
```

### remove / modify
1. remove folder of ordering-app
2. remove parts of nest-cli.json

### create microservices apps
```
# create billing app
$ nest g app billing

# create auth app
$ nset g app auth
```

### start apps at local env
```
# default app 'orders'
$ npm run start:dev 

# start billing
$ npm run start:dev billing

# start auth
$ npm run start:dev auth
```

### create common libs
```
$ nest g library common
```

### install supported libs
```
  $ npm i mongoose @nestjs/mongoose @nestjs/config joi class-transformer class-validator @nestjs/microservices amqp-connection-manager amqplib @nestjs/jwt @nestjs/passport bcrypt cookie-parser passport passport-jwt passport-local
```

### set database at docker
- setup [mongodb image](https://github.com/bitnami/bitnami-docker-mongodb/blob/master/) replica set for transaction
```
# create docker-compose at root path
$ touch docker-compose.yml
```

### run apps at docker env
```
# -V reset volume
$ docker-compose up --build -V 
```

## References

1. [Build Nest.js Microservices With RabbitMQ, MongoDB & Docker | Tutorial](https://www.youtube.com/watch?v=yuVVKB0EaOQ)

2. [Source code](https://github.com/mguay22/nestjs-rabbitmq-microservices)

3. [NestJs Document](https://docs.nestjs.com/)