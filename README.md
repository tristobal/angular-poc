# [Angular-POC][![Build Status](https://travis-ci.org/tristobal/angular-poc.svg?branch=master)](https://travis-ci.org/tristobal/angular-poc)

***
## Requisitos
Tener instalado Node.js

Con Node instalado instalar bower, grunt y karma de manera global con el siguiente comando:
```sh
$ sudo npm -g install grunt-cli karma bower
```

## Instalación

Clonar el repositorio
```sh
$ git clone https://github.com/tristobal/angular-poc.git
```
Ubicarse en el directorio creado por la clonación e instalar los paquetes node y bower
```sh
$ cd angular-poc
$ npm install
$ bower install
```
Ejecutar la construcción de los fuentes
```sh
$ grunt
```
Para construir los fuentes y quedar "escuchando" los cambios realizados utilizar:
```sh
$ grunt watch
```
Esto ultimo además abrirá automaticamente el navegador por defecto la ruta en la cual se servirá localmente el sitio. En este caso http://localhost:3000
