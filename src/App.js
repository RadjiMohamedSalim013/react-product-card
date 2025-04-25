// Importation des modules React et Bootstrap
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './App.css'; // Fichier CSS  pour ajouter du style plus tard

// Importation des composants personnalisés
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

// Déclaration d’une variable prénom pour personnaliser le message
const prenom = "Salim"; //  Change cette valeur pour tester le comportement

// Composant fonctionnel App (composant racine de l'application)
const App = () => {
  return (
    // Utilisation de Container de Bootstrap avec un peu de marge top et alignement au centre
    <Container className="mt-5 d-flex justify-content-center">
      <div>
        {/* Carte Bootstrap qui contient tous les détails du produit */}
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Image /> {/* Affiche l’image du produit */}
            <Card.Title><Name /></Card.Title> {/* Titre = nom du produit */}
            <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle> {/* Sous-titre = prix */}
            <Card.Text><Description /></Card.Text> {/* Description du produit */}
          </Card.Body>
        </Card>

        {/* Section pour afficher un message personnalisé */}
        <div className="mt-3 text-center">
          {prenom ? ( //  Si un prénom est défini
            <>
              <h3>Bonjour, {prenom} !</h3>
              <img 
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGhsaWQzb284anRzNWFycW1nOWx1YTZ4eWp0MGs4cWdnend4cXRweSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BCVGWcQT3m8A2RTquC/200.webp" 
                alt="salut" 
                width="150" 
              /> {/* Image sympa affichée uniquement si le prénom existe */}
            </>
          ) : (
            <h3>Bonjour !</h3> // Sinon, juste un bonjour générique
          )}
        </div>
      </div>
    </Container>
  );
};

// Export du composant pour l’utiliser ailleurs (ici, point d’entrée index.js)
export default App;
