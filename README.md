### Packages need to be installed
class-validator
class-transformer
bcryptjs
express
sequelize
sequelize-typescript
@nestjs/sequelize
pg
pg-hstore
passport
passport-jwt
@nestjs/passport
@nestjs/jwt
@nestjs/mapped-types


### Notes
 - exports : [], if we include any service inside array, if we import that module in any module, those services can be available for those modules(availbel for injections).
 - We can import as module , or we can just put particular service in the provider
 - Do not handle/throw errors in service, just return null, handle it in controller
 - Becarefull for circular dependency
 - Importing what is needed in providers is by far simple implementation.
 - `Important note` : While in debugging first check for Injectable decorator and then ensuring correct dependencies.


### Steps Followed

- Installed required packages.
- Created .env file and added env variables
- Created Config folder with databaseConfg and serverConfig(for all env vars)
- Established Sequelize connection for the application.
- Create Resource for User, create dtos(create , update) and validations, updated global pipes at main.ts.
- Create a common global exception filter for caching all the errors in the application and register at main.ts
- Create models folder and create user model with validations, and register table in the corresponding module (for Feature)
- Start implementing methods inside service file (Inject the User model to the service file)
- Start implementing routes inside controller file(Inject the user service to the controller)
- Once you start the server the all the database config will be loaded to db(don't make mistakes, delete it and create it)

### Auth Module
- Create Auth module , Auth Service , Auth Controller,
- Import User module inside Auth Module (UserService, Sequelize are exported from userModule), We can make use of user service and Sequelize model in auth module by injecting.
- Import JwtModule in Auth Module and register it with secret and signin options such as expireIn.
- Inside Auth controller create signin and call methods from user service. 
- Inside Auth controller add one more route login and add a dto and service method for login.
- Inside Auth service add a method login, inject User Model, jwtService , check for email and password match using bcrypt and create token using jwt service

### Auth guard
 - Create an authguard with can activate function, write the logic to extract jwt and using jwtservice and verify it.
 - Add jwtModule in exports for auth module
 - To call this in any controller, we need to have jwtservice as provider in thier corresponsing module , or we need to import authmodule (because we are using jwtservice in auth guard it should expose to others)

### Auth Guard with passport
 - First create a jwt strategy file, inside pass configuation(jwt secret). write validate function(fetching user from DB).
 - Passport takes the request extracts jwt verifies jwt and in validate function it fetches user information and puts inside req as req.user, we can use that in other controllers.
 - Now Register the jwtStrategy in module providers, so that auth guard can use it.
 - now create a guard which extends auth guarc from passport with jwt.
 - use it in any controllers.

### Roles RBAC.
- RBAC : Controller should be defined with a role(We are doing with by using a decorator) basically we are telling this route requires these many roles. Now We need to check whether Users request has suffiecient roles (We are doing this by using a role guard.)
- Responsibility of Role decorators : Provides metadata to a route 
- Responsibility of a Role Guard : it checks what are the roles are there for that particular route and are those passed by user if "Yes" returns true and able to access the resource.
- RolesGuard works after auth guard, because auth guard passes user information to req, then later role guard uses to compare roles.

