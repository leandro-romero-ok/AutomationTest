##GUIDE

Para poder usar Nightwatch se recomienda las siguientes dependencias y versiones:

Node.js: 6.9.1 o superior
  * [Linux (Debian & Ubuntu based) package-manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

Dependencias de npm:
  * [selenium-standalone](https://www.npmjs.com/package/selenium-standalone): 5.8.0 o superior
  * [nightwatch](https://www.npmjs.com/package/nightwatch): 0.9.11 o superior

##Correr los siguientes comandos para instalar y correr los test automatizados

Correr el comando para la instalacion del framework y selenium
```
npm run setup

```

##Correr los test automatizados
```
npm run test -- -e xvfb_desktop
```