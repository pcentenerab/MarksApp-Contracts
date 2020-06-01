# MarksApp-Contracts

## Secciones

- [General](#general)
- [Primeros pasos](#primeros_pasos)
- [Uso](#uso)
- [Contribución](#contribucion)

## General <a name = "general"></a>

Este repositorio forma parte del proyecto correspondiente a mi Trabajo de Fin de Grado del Grado en Ingeniería de Tecnologías y Servicios de la Telecomunicación en la Universidad Politécnica de Madrid: Desarrollo de un servicio de gestión de asignaturas basado en Blockchain e implementación de clientes nativos para dispositivos iOS. Mi tutor durante el desarrollo del trabajo, defendido en junio de 2020, ha sido Santiago Pavón.

En concreto, MarksApp-Contracts contiene el proyecto Truffle necesario para desplegar los contratos Asignatura utilizados en la aplicación principal en cualquier red de tipo Blockchain. Estos contratos se utilizan en el repositorio [MarksApp](https://github.com/pcentenerab/MarksApp). Se detalla a continuación el procedimiento para desplegarlo en Ganache. 

## Primeros pasos <a name = "primeros_pasos"></a>

Hay que clonar el repositorio, así como compilar y desplegar los contratos FTEL, PROG, CORE e IWEB.


### Prerrequisitos

Cabe destacar que Ganache debe estar activo y con el fichero truffle-config.js asociado a la red.


### Instalación

Para instalar el proyecto en el entorno, hay que ejecutar los siguientes comandos desde un terminal.

```
$ git clone https://github.com/pcentenerab/MarksApp-Contracts 
$ cd MarksApp-Contracts/TruffleProject
$ truffle compile
$ truffle migrate
```

A partir de aquí, ya se tiene los contratos desplegados en la red de Ganache y se puede interactuar con ellos a través de la aplicación. Para poder disponer de información por defecto, como algún alumno matriculado o evaluaciones, se debe acceder al directorio DefaultValues. En él, se deben ejecutar los siguientes comandos tras incluir en las líneas 16 a 19 del fichero setupDefault.js las direcciones de los respectivos contratos desplegados.

```
$ npm update
$ npm install
$ npm start
```

Se debe finalizar la ejecución del último comando cuando se observe que por consola se muestra el mensaje “Fin”.

## Uso <a name = "uso"></a>

A partir de aquí, ya se tienen los contratos desplegados e inicializados en la red de Ganache y se puede interactuar con ellos.


## Contribución <a name = "contribucion"></a>

Este repositorio se enmarca en el proyecto ya mencionado, que proporciona una guía de desarrollo disponible para toda la comunidad de desarrolladores. Estaré encantada de recibir contribuciones al respecto para poder mejorar el potencial de la investigación.
