# Curso

https://www.youtube.com/watch?v=zbDWZJubhvM


Agregar a nest como az function

  https://www.npmjs.com/package/@nestjs/azure-func-http

  
  ## package.json 
  
    modificar -> "reflect-metadata": "^0.1.14",

    - https://github.com/rbuckton/reflect-metadata/tree/v0.1.14


  $ npm install -g @angular/cli
  $ npm install @schematics/angular --save-dev
  $ nest add @nestjs/azure-func-http



## En azure

1. Crear azure function app
2. Ir a la az funcion creada -> Authentication -> autenticar el repo de github 
3. Ir a Create Management Credentials -> Managed Identities y en Subject identifier poner repo:mbarvece/nest-api:environment:Production
4. Ir a la az funcion creada -> Deployment Center -> Seleccionar github -> Seleccionar el repo -> Seleccionar la rama -> Seleccionar el directorio -> Seleccionar el runtime stack -> Seleccionar el runtime version
5. En github crear maualmente el AZURE_FUNCTIONAPP_PUBLISH_PROFILE (https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions) y poner el valor que se obtiene en la az funcion creada -> Get publish profile


*. borré los storage accounts que se crearon



https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions?tabs=linux%2Cdotnet&pivots=method-manual