##GUIDE

Para poder usar Nightwatch se recomienda las siguientes dependencias y versiones:

Node.js: 6.9.1
  * [OSX pkg](https://nodejs.org/dist/v6.9.1/node-v6.9.1.pkg)
  * [OSX package-manager](https://nodejs.org/en/download/package-manager/#osx)
  * [Linux (Debian & Ubuntu based) package-manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

Dependencias de npm:
  * [selenium-standalone](https://www.npmjs.com/package/selenium-standalone): 5.8.0
  * [nightwatch](https://www.npmjs.com/package/nightwatch): 0.9.11

##¿Hay una demo?

  Si, :)

Correr el comando para la instalacion del framework y selenium
```
npm run setup

```

##Ejemplos

Para correr la suite de ejemplo deben correr el comando:

Web mobile y dektop
```
npm run test -- --tag guideDemo -e xvfb_mobile && npm run test -- --tag guideDemo -e xvfb_desktop

```
Si todo resultó bien deberias ver algo asi... :)

![Demo](https://media.giphy.com/media/3oz8xww3O8LIm06Pvy/giphy.gif)

#Limitaciones de la herramienta
Conocimiento base de JavaScript

##¿Contacto?

**BA-testing** - ba-testing@mercadolibre.com
