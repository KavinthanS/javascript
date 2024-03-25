 # 🚀 Cours ECMAScript et installation de l'environnement de travail Babel
 ![logo](./asset/logo-js.png)
>ECMAScript est un ensemble de normes concernant les langages de programmation de type script et standardisées par Ecma International dans le cadre de la spécification ECMA-262. Il s'agit donc d'un standard, dont les spécifications sont mises en œuvre dans différents langages de script, comme JavaScript ou ActionScript. C'est un langage de programmation orienté prototype.
Date de plublication : janvier 2016 

## 💡Comment installer Babel?


Vérifier la version npm
puis ```npm init```
npm install ```--save-dev babel-cli babel-preset-env```

Ajouter dans le fichier jSon la ligne de code qui suit : ```"build": "babel --no-babelrc src -w -d js``` --preset=env"
Cibler le répertoire "SRC" et commande : ```npm run build```

*📝Nota bene : pour installer le CLI faire d'abord npm init pour le package.json*

**🧑‍💻Configurer le fichier jSon :**
```json
{
  "name": "my_project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel --no-babelrc src -w -d js --preset=env"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}
```
