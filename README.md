

# react-product-card

## Description

Ce projet est une petite application React développée avec `create-react-app`. Elle permet d'afficher les détails d’un produit (nom, prix, description, image) dans une carte visuelle stylisée, avec un message personnalisé en fonction d’un prénom fourni.

L’objectif principal est de pratiquer les concepts suivants :
- La création de composants React fonctionnels
- L’importation d’un objet JSON
- L’utilisation de React-Bootstrap pour la mise en page
- La condition d’affichage selon une variable
- La séparation de la logique et du style (CSS)

---

## Fonctionnalités

- Affichage du **nom**, **prix**, **description** et **image** d’un produit via des composants séparés  
- Intégration de `react-bootstrap` pour une présentation soignée sous forme de carte  
- Message dynamique affiché selon que le prénom soit renseigné ou non  
- Image supplémentaire affichée si le prénom est présent  
- Structure de projet claire et composants réutilisables  

---

## Structure des fichiers

- `src/App.js` : composant racine qui rassemble tous les autres  
- `src/product.js` : contient les données du produit sous forme d’un objet JSON  
- `src/components/` : dossier contenant les composants suivants :  
  - `Name.js`  
  - `Price.js`  
  - `Description.js`  
  - `Image.js`  
- `src/App.css` : styles personnalisés  
- `src/assets/` (optionnel) : pour les images locales du produit  

---

## Technologies utilisées

- React (via create-react-app)  
- React-Bootstrap  
- CSS  

---

## Comment démarrer

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/RadjiMohamedSalim013/react-product-card.git
   ```

2. Accéder au dossier :
   ```bash
   cd react-product-card
   ```

3. Installer les dépendances :
   ```bash
   npm install
   ```

4. Lancer le projet :
   ```bash
   npm start
   ```

Le projet se lancera automatiquement dans votre navigateur à l’adresse `http://localhost:3000`.

---
