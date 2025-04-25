import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './App.css';


import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

// prénom (à modifier selon toi)
const prenom = "Salim"; // Laisse vide "" pour tester l'autre message

const App = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div>
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Image />
            <Card.Title><Name /></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><Price /></Card.Subtitle>
            <Card.Text><Description /></Card.Text>
          </Card.Body>
        </Card>

        <div className="mt-3 text-center">
          {prenom ? (
            <>
              <h3>Bonjour, {prenom} !</h3>
              <img 
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGhsaWQzb284anRzNWFycW1nOWx1YTZ4eWp0MGs4cWdnend4cXRweSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BCVGWcQT3m8A2RTquC/200.webp" 
                alt="salut" 
                width="150" 
              />
            </>
          ) : (
            <h3>Bonjour !</h3>
          )}
        </div>
      </div>
    </Container>
  );
};

export default App;
