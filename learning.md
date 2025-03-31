# NestJS

```npm i -g @nestjs/cli```
```nest new project-name```

### Modules
 - App is the root module, we can create any modules and we should place them in app modules imports[], basically we are registering our module in app module
 - App module is responsible for creating dependency tree.
 - Similarly for controllers and services we should register them to where it belongs to.
 - Module is identified by @Module decorator, it consists of (imports, controllers, providers)
 - ```nest generate module ninjas``` or ```nest g m ninjas```
 - ```nest generate controller ninjas``` or ```nest g c ninjas```
 - ```nest generate service ninjas``` or ```nest g s ninjas```
 - When we create service and controller using cli, the ninjas module will be updated with providers[] and controllers[]
 - There is a command where we can generate entire resourse with dtos, controllers and services ```nest generate resourse users```

### Controllers
 - Controller is identified by @Controller('ninjas') it takes a string which is route
 - Inside we can write methods and we can define the routes by @Get @Post etc decorators
 - @Get(':id') we can catch that param with ```@Param('id') id : string```
 - @Get will also receive query params we can catch that with ```@Query('type') type: string```
 - @Post will receive body we can catch using ```@Body newUser : CreateNinjaDto```
 - dtos are something which define the structure of incoming body and used for validation using class-validator and class-transformer functions
 - we will create a folder named dto to place all dtos related to that module

### Providers or Services
- Service is identified by @Injectable() decorator, these are automatically injected to the controller by nestjs.
- In Controller class the service will be injected inside constructor
- We can write any method and those methods can be used inside the constructor
- In Services we can write the busines logic for the application.
- Services interact with the models and write db queries and also interact with ORMS like seequelize,typeORM etc.


### Exception handling
 - Nest js has lot of built in exceptions we can check the instance and we can send appropriote error to the end user.
 - if null comes from the db then we need to check for null condition in controller and we should through appropiate Exception. other wise empty will be sent to the user.

### List of Exceptions
 - BadRequestException 400: When the client sends an invalid or malformed request.
 - UnauthorizedException 401: When the client is not authorized (e.g., missing or invalid authentication credentials).
 - ForbiddenException 403:  When the client doesn't have permission to access the resource.
 - NotFoundException 404: When the resource the client is trying to access cannot be found.
 - InternalServerErrorException 500: When there is a server-side error that prevents fulfilling the request.
 - MethodNotAllowedException 405 : This exception is used when the client tries to access a resource with an HTTP method that is not supported by the resource.
 - ServiceUnavailableException 503 : This exception is used when the server is temporarily unable to handle the request (e.g., when it is overloaded or under maintenance).

### Pipes
 - Pipes are used for validations and transformations, its like a middleware.
 - class-vaalidator, class-transformer are used to set validations for dtos, and we have a pipe names validationPipe will make sure that is followed
 - We can set pipe at global level, controller level, method level also.

### Guards
 - Guards can be identified by @Injectable only it extends with canActivate class and it has access to gloabalExecution context and incoming request
 - It performs logic and returns true or false.
 - Used for Authentication and role based access.


### DTOs

 - We can write dtos as a class and we can use decorators from class-validator package
 - We can define a global pipe in main.ts
 - ```app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));```
 - Transform will transform plain objects to classes to compare validations with class-validator
 - class-transformer is internally used by nestjs 

### interceptors


### jwt strategy and passport


### exception filters
 - Exception filter is something we can format all the error structure uniformly. think like it's a interceptor or hard stop for catch block. all erros will come here and formatted and sent to the user.
 - We are creating a filter at global level so that it applies to every route.
 - Create a http exception filter inside filters folder and register in main.ts

### mongodb
 - Run MongoDb server , place it in the .env
 - Register mongoose module in app module file.
 - create schema folder and create user.schema.ts
 - Register the schema and name in the user module using mongoose module.
 - Go to user service file and inject the user model and write methods for it
 - Go to controllers and inject user service and write routes
 - important thing from schema is User , UserSchema, UserDocument
 - User is exported for names and other meta data, UserSchema is for registering , UserDocument is the real model.
 - in service file the function inputs are DTOs and outputs are UserDocument.
 - in controllers file the function inputs are DTOs.

### seqeelize

### schema


 ### main.ts
 - We can define useGloablPipes, useGlobalGuards, useGlobalInterceptors, everything at global level.
 - We can also do the same with controller level and method level.

 ### Logger middleware
 - we define logger middleware at main.ts so that it can log all over app.
 - create a middleware inside common and middleware folder and create a middleware.
 - Go to app module and configure the middleware and register the middleware for any routes/paths. we can chain methods for 
 multiple middlewares

 ### Cors

 ### Swagger

 ### note
 - We can create any class for any untility and keep it as @injectable. and it should be in providers in module file.

