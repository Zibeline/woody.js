# woody.js

woody.js est une libraire servant à afficher des boites de dialogue.

# Installation

Copier les fichiers woody.js et woody.css dans votre projet et les importer

Dans la balise `<head>` :

    <link rel="stylesheet" href="/woody.css">
    
Après l'importation de jQuery :

    <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="/woody.js"></script>

# Utilisation

## woody.alert()

    woody.alert(msg, callback);
  
* **msg** : message à afficher
* **callback** : fonction de callback à appeler

## woody.confirm()

    woody.confirm(msg, buttons, callback)
    
* **msg** : message à afficher
* **buttons** : tableau contenant les boutons à afficher. Les boutons sont identifiés par un numéro unique (voir plus bas)
* **callback** : fonction de callback à appeler

La fonction de callback recevra comme seul argument le numéro unique du bouton sur lequel l'utilisateur à cliqué.

## woody.prompt() 

    woody.prompt(msg, placeholder, callback)
  
* **msg** : message à afficher
* **placeholder** : placeholder dans la zone de texte
* **callback** : fonction de callback à appeler

La fonction callback recevra comme seul argument le texte entré par l'utilisateur, ou `null` si l'utilisateur cliques sur annuler

## Boutons

Les boutons sont identifiés par un identifiant unique, stocké dans des variables. Les boutons disponibles sont :

* Annuler : `woody.CANCEL`
* Ok : `woody.OK`
* Oui : `woody.YES`
* Non : `woody.NO`
* Confirmer : `woody.CONFIRM`
* Continuer : `woody.CONTINUE`

Les fonctions `woody.alert()` et `woody.prompt()` renvoient toutes les deux l'identifiant du bouton sur lequel l'utilisateur a cliqué.

On peut facilement récupérer et comparer cette valeur renvoyée dans la fonction callback. Exemple de fonction callback testant si l'utilisateur a appuyé sur le bouton "annuler" :

    function callback (val) {
      if (val==woody.CANCEL) {
        console.log("L'utilisateur a cliqué sur annuler");
      }
      else {
        console.log("L'utilisateur a cliqué sur un autre bouton que annuler");
      }
    }

# Paramètres

## Thème 

Il existe deux thèmes de boites : "light" et "dark".

Le thème actuel est stocké dans la variable suivante :

    woody.theme
    
On peut modifier le thème avec la fonction suivante :

    woody.setTheme(theme)

## Vitesse de fondu

La vitesse de fondu est stocké dans les deux variables suivantes :

    woody.fadeBkg
    woody.fadeBox
    
Où `woody.fadeBkg` est la vitesse d'apparition et de disparition de l'arrière-plan et `woody.fadeBox` est la vitesse d'apparition et de disparition de la boite.

# To-do list

* Pour les woody.confirm(), choisir certains boutons par défaut si aucun bouton n'est passé en argument
* Titre et icone dans les boites
* Plusieurs animations avec choix
