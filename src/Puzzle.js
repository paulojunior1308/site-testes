import React, { useState } from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

const Puzzle = () => {
  
    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate(); // 

    const checkAnswer = () => {
        if (answer.toLowerCase() === "nosso amor") {
            navigate('/letter');
        } else {
            setResult("Resposta incorreta. Tente novamente!");
        }
    };

    return (
        <div className="puzzle">
            <h2>Resolva o enigma para ver a surpresa!</h2>
            <p>O que é cheio de amor e nunca acaba?</p>
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Digite sua resposta"
            />
            <div className='button'>
              <button className="bn5" onClick={checkAnswer}>Verificar</button>
            </div>
            <p>{result}</p>
        </div>
    );
}

export default Puzzle;
