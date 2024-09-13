import React, { useState } from "react";
import './Welcome.css';
import Letter from './Letter';
import Timeline from "./Timeline";
import Puzzle from "./Puzzle";
import matue from "./image/matue.mp3";

function Welcome(){
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  const goBack = () => {
    setCurrentPage('home');
  };

  const playAudio = () => {
    const audio = new Audio(matue);
    audio.loop = true;
    audio.play();
  };

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
                <button className="bn5" onClick={() => { playAudio(); setCurrentPage('timeline'); }}>
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
