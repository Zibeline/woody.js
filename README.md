# woody.js

woody.js est une libraire servant à afficher des boites de dialogue.

# Installation

Copier les fichiers woody.js et woody.css dans votre projet et les importer

# Utilisation

## woody.alert()

  woody.alert(msg, callback);

## woody.confirm()

  woody.confirm(msg, buttons, callback)

## woody.prompt() 

  woody.prompt(msg, placeholder, callback)
  
* **msg** : message à afficher
* **placeholder** : placeholder dans la zone de texte
* **callback** : fonction callback à appeler

La fonction callback recevra comme seul argument le texte entré par l'utilisateur, ou `null` si l'utilisateur cliques sur annuler

# Paramètres

## Thème 

woody.theme contient le thème actuel

woody.setTheme(theme)

theme = [light, dark]

## Vitesse de fondu

modifier les variables woody.fadeBkg et woody.fadeBox
