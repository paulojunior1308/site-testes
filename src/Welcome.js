import React, { useState, useEffect } from "react";
import './Welcome.css';
import Letter from './Letter';
import Timeline from "./Timeline";
import Puzzle from "./Puzzle";
import matue from "./image/matue.mp3";

function Welcome() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  const goBack = () => {
    setCurrentPage('home');
  };

  useEffect(() => {
    if (currentPage === 'home') {
      const audio = new Audio(matue);
      audio.loop = true;
      audio.play().catch(error => {
        // Se o navegador bloquear o autoplay, o erro será capturado aqui
        console.log("O autoplay foi bloqueado: ", error);
      });
    }
  }, [currentPage]); // Toca o áudio sempre que a página 'home' for carregada

  const renderPage = () => {
    switch (currentPage) {
      case 'letter':
        return <Letter goBack={goBack} />;
      case 'timeline':
        return <Timeline goBack={goBack} />;
      case 'puzzle':
        return <Puzzle goBack={goBack} />;
      default:
        return (
          <section className="welcome">
            <div className="welcome-message">
              Bem-vinda ao seu site de aniversário, minha maravilhosa! 💖
              <div className="button">
                <button className="bn5" onClick={() => setCurrentPage('timeline')}>
                  Clique aqui
                </button>
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default Welcome;
