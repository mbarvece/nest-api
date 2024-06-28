# Curso

https://www.youtube.com/watch?v=nAhMDfDSTgA&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v

### Instalación node

[nodejs.org](https://nodejs.org/en)
Descargar la LTS

### Instalación CLI nest

https://docs.nestjs.com/


$ npm i -g @nestjs/cli
$ nest new project-name
$ nest -v

### Crear proyecto en nest

$ nest new helloNest

* El cli de nest utiliza Kebab Case. Ej HelloWorld = hello-world

### Levantar el proyercto

$ cd hello-nest
$ nest start --watch


### Estructura de un proyecto en nest.js
- https://www.youtube.com/watch?v=iRPBC6tLrl8&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=15

* /dist es la app compilada con codigo java sacript para q lo puedan usar los navegadores

* nest-cli.json es el achivo principal de configuración de nest.js


### Flujho de ejecución 
- https://www.youtube.com/watch?v=1C05SryGjfE&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=15

![flujo-ejecucion](/flujo-ejecucion.png "flujo-ejecucion")

    

### Proyecto del curso

![proyecto](/proyecto.png "proyecto")

![arquitectura-app](/arquitectura-app.png "arquitectura-app")
    


## Crear el proyecto del curso
$ nest new twitter-api
$ cd twitter-api
$ nest start --watch


### Controladores

$ nest generate controller
$ nest g co


$ nest g co tuits
Crea la carpeta con el controlador de tuits y lo agrega al app.module


## Body de peticiones

https://www.youtube.com/watch?v=xi13tuVTvAc&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=23


## Codigos de estado

Nest responde bien los codigos de estado si es un get 200 o post 201, pero se puede cambiar segun la funcionalidad
usar el decorador @HttpCode(HttpStatus.NO_CONTENT)



## Servicios
$ nest generate service
$ nest g s


    Los servicios o proveedores son un concepto fundamental en Nest. Muchas de las clases básicas de Nest pueden tratarse como un proveedor: servicios, repositorios, fábricas, ayudantes, etc. La idea principal de un proveedor es que se puede inyectar como dependencia; esto significa que los objetos pueden crear varias relaciones entre sí, y la función de "conectar" instancias de objetos se puede delegar en gran medida al sistema de tiempo de ejecución de Nest.



## Modulos

    varios mudos q encapsulen la lógica de negocios

$ nest generate module
$ nest g mo


$ new folder -> /moduler
$ nest g mo modules/tuits



## DTO
$ nest generate class
$ nest g cl modules/tuits/dto/create-tuit-dto --no-spec -> crea el dto y para crearlo usas: acción-entidad-dto.ts, el --no-spec es para no crear el test

crear en la carpeta /dto el archivo index.ts


- Instalacion de class validator y class transformer, esto es para agregar decoradores a las propiedades de la clase

$ npm i class-validator class-transformer



## Debugger

Crear la carpeta .vscode (con el .xxx le decis q la carpeta o archivo es oculto) 
Crear el archivo launch.json y pegar lo siguiente:


{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Nest.js Launch Program",
            "request": "launch", //^ es para decir q se ejecute cuando levanta node,ya q es del tipo node
            "type": "node",
            "skipFiles": ["<node_internals>/**"],
            "runtimeArgs": [
                "-r",
                "-ts-node/register", //^ permide debugear el codigo ts
                "-r",
                "tsconfig-paths/register" //^ permide trabajar con los paths de forma mas fácil
            ],
            "args": [
                "${workspaceFolder}/src/main.ts" //^ archivo principal 
            ],
            "autoAttachChildProcesses": true  //^ Esto es para q los logs se venan en la terminal q esta abierta
        }
    ]
}


# Sección IV - Base de datos

## Preparativos Docker

$ docker run -d -p 8080:80 nginx




## Type ORM

O bject
R elational
M apping


ORM sql posgress
$ npm i typeorm pg @nestjs/typeorm  -> el pg es para los paquetes de posgress, y el @nestjs/typeorm es el orm de nest




ORM sql serever 
    https://github.com/jesusvalenzuelar/nestjs-starter-template
$ npm i typeorm mssql @nestjs/typeorm



$ nest g mo modules/users





# Codigo Fuente

https://github.com/MarluanEspiritusanto/tuitter-api-nestjs-course



Ultimo:

https://www.youtube.com/watch?v=FPiEDkTwa9k&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=42