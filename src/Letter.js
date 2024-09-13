import React, { useEffect, useState } from 'react';
import './Welcome.css';

const Letter = () => {
    const [text, setText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false); // Estado para controlar a exibição da imagem
    const fullText = 
    `Meu amor, neste dia tão especial, quero deixar claro o quanto você ilumina minha vida. Cada instante ao seu lado transforma o comum em extraordinário, e a cada sorriso seu, meu coração se enche de alegria. Você é o meu abrigo, minha inspiração, e sou eternamente grato por cada momento que vivemos juntos.

    Compartilhar minha vida com você é o maior presente que eu poderia receber. Seu amor me faz querer ser uma pessoa melhor a cada dia, e nos seus braços eu encontro a paz que o mundo não oferece. Hoje celebro não apenas o seu aniversário, mas também o privilégio de amar e ser amado por alguém tão especial.
    
    Feliz aniversário, meu amor! Que este seja mais um de muitos capítulos que ainda escreveremos juntos. Te amo além das palavras! ❤️`;

    useEffect(() => {
        let index = 0;
        let typingTimeout;

        const typeLetter = () => {
            if (index < fullText.length) {
                setText(prev => prev + fullText.charAt(index));
                index++;
                typingTimeout = setTimeout(typeLetter, 50); // Ajuste a velocidade aqui
            } else {
                setIsTypingComplete(true); // Marca a digitação como completa
            }
        };

        typeLetter(); // Inicia a digitação

        // Limpar timeout quando o componente desmontar
        return () => clearTimeout(typingTimeout);
    }, [fullText]);

    return (
        <div className="letter">
            <div className="typing">{text}</div>
            {isTypingComplete && ( // Só exibe a imagem se a digitação estiver completa
                <div>
                    <img className="surpresa" src={`${process.env.PUBLIC_URL}/image/surpresa.jpg`} alt="Carta" />
                </div>
            )}
        </div>
    );
}

export default Letter;
