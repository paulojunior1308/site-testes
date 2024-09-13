import React, { useState, useEffect } from "react";
import './Welcome.css';
import Letter from './Letter';
import Timeline from "./Timeline";
import Puzzle from "./Puzzle";
import matue from "./image/matue.mp3";

function Welcome() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual
  const [, setAudio] = useState(null); // Estado para gerenciar o áudio

  const goBack = () => {
    setCurrentPage('home');
  };

  useEffect(() => {
    if (currentPage === 'home') {
      // Cria uma nova instância do áudio
      const newAudio = new Audio(matue);
      newAudio.loop = true;
      setAudio(newAudio);

      // Tenta reproduzir o áudio e captura erros
      newAudio.play().catch(error => {
        console.log("O autoplay foi bloqueado: ", error);
      });

      // Adiciona um manipulador de eventos para o clique na página
      const handleUserInteraction = () => {
        newAudio.play().catch(error => {
          console.log("O autoplay foi bloqueado após interação: ", error);
        });
        // Remove o manipulador após a primeira interação
        window.removeEventListener('click', handleUserInteraction);
      };

      window.addEventListener('click', handleUserInteraction);

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
