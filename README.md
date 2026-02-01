# 🎡 Wheel Game - Multijoueur Local

Un moteur de jeu interactif et compétitif basé sur une roue de la fortune. Conçu pour être joué à **plusieurs sur le même écran**, les joueurs s'affrontent pour bâtir la meilleure collection.

## 🎮 Concept du Jeu

Les joueurs font tourner la roue à tour de rôle pour :
- **Récupérer** de nouveaux éléments pour leur collection.
- **Voler** des éléments stratégiques aux adversaires.
- **Protéger** leurs membres les plus précieux contre les attaques.
- **Bannir** : Retirez définitivement un élément du jeu pour saboter vos adversaires.

🏆 **Victoire :** Le premier joueur à collectionner **10 éléments** gagne la partie.

## 🎤 Exemple inclus : Star Academy
Pour illustrer les mécaniques, le projet est fourni avec une base de données basée sur la **Star Academy**. Les joueurs collectionnent des académiciens et tentent de compléter des promos (groupes).

## 🚀 Démarrage Rapide

### 1. Prérequis
- **Node.js** (version 18 ou plus) installé sur votre machine. [Télécharger ici](https://nodejs.org/en/download)

### 2. Lancement
1. **Téléchargez le projet** via le bouton `Code` > `Download ZIP` sur GitHub et extrayez l'archive.
2. Ouvrez un terminal dans le dossier du projet.
3. Installez les dépendances :
```bash
npm install
```
4. Lancez le jeu :
```bash
npm run dev
```

⚙️ Personnalisation

Le moteur est universel. Vous pouvez changer de thématique (Musique, Sport, etc.) en modifiant simplement le fichier : src/data/database.ts