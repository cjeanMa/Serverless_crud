# Simple CRUD TASKS
Project to test dynamo's functions (GET, POST, PUT, DELETE), with the framework serverless.

## Instalation  
Para la instalacion y prueba del proyecto es necesario tener:
 - Tener instalado serverless de manera global, en caso no lo tenga, usar el siguiente script
 ```
    npm install -g serverless
 ```
 - Tener un usuario aws con privilegios sobre lambda, dynamoDB, s3, apiGateway, o por defecto uno con privilegios de admin, con los credenciales del usuario usaremos el siguiente script:
 ```
 serverless config credentials --provider aws --key "ID_DE_USUARIO" --secret "SECRET_KEY_USUARIO" --profile swapi-deploy-aws
 ```
 - Para el despliegue puede usar uno de estos comandos
 ```
 serverless deploy
   or
 npm run deploy
 ```

 ## To test local
 To make test of functions you can use this command
 ```
 serverless invoke local -f 'name_function'
 ```