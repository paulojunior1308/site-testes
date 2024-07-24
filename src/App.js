import Heart from './Heart'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar a página atual

  const goBack = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'heart':
        return <Heart goBack={goBack} />; 
      default:
        return (
          <div className="bloco-lista">
            <h1 class="text1">Se você me ama</h1>
            <button className="bn5" onClick={() => setCurrentPage('heart')}>Clique aqui</button>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
};

export default App;
