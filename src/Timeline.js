import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';


const events = [
  {
    title: 'Nossa primeira viagem para Buzios juntos',
    description: 'Nossa primeira viagem juntos para Buzios, já estava perdidamente apaixonado em você.',
    image: `${process.env.PUBLIC_URL}/image/buzios.jpg`,
    alt: 'Primeira Viagem'
  },
  {
    title: 'Nossa primeira viagem em familia',
    description: 'A viagem foi um tédio total kkkk, mas cada viagem com você é especial.',
    image: `${process.env.PUBLIC_URL}/image/viagem-familia.jpg`,
    alt: 'Viagem em familia'
  },
  {
    title: 'Minha formatura',
    description: 'Foi o dia que eu percebi o quanto me adimirava e me amava',
    image: `${process.env.PUBLIC_URL}/image/formatura.jpg`,
    alt: 'Formatura'
  },
  {
    title: 'Melhor Viagem para Porto de Galinhas',
    description: 'A melhor viagem de todos os tempos, ficamos poucos dias mas aproveitamos muito cada minuto. Ainda voltaremos la!',
    image: `${process.env.PUBLIC_URL}/image/porto-melhor.jpg`,
    alt: 'Porto de Galinhas'
  },
  {
    title: 'Nosso restaurante favorito',
    description: 'Primeira vez que fomos ao Panchos, nunca vou me enjoar de ir la com você.',
    image: `${process.env.PUBLIC_URL}/image/primeira-panchos.jpg`,
    alt: 'Panchos'
  },
  {
    title: 'Nossa viagem para Natal',
    description: 'Não tive boas experiências com essa viagem kkk mas foi muito especial para mim também ver o quanto você estava feliz.',
    image: `${process.env.PUBLIC_URL}/image/natal.jpg`,
    alt: 'Natal'
  },
  {
    title: 'Nossa ultima viagem para São Sebastião',
    description: 'Não tem o que dizer do nosso lugar favorito, estou com saudades inclusive kkkk',
    image: `${process.env.PUBLIC_URL}/image/lugar-favorito.jpg`,
    alt: 'Sebastiao'
  },
  {
    title: 'Nossa primeira foto no nosso possante',
    description: 'Estou amando cada conquista nossa. Faltou a foto com nosso ap, mas logo teremos varias.',
    image: `${process.env.PUBLIC_URL}/image/foto-carro.jpg`,
    alt: 'Carro'
  },
  {
    title: 'Nossa viagem para o noivado',
    description: 'Finalmente conseguimos viajar para um lugar sem ser praia kkkkk e agora noivos, com as mesmas ideias e sintonia, estou amando!',
    image: `${process.env.PUBLIC_URL}/image/noivos.jpg`,
    alt: 'Noivos'
  },
  {
    title: 'O lugar onde vamos casar',
    description: 'Não precisa ser exatamente nessa igreja, mas desde que seja na praia kkkk',
    image: `${process.env.PUBLIC_URL}/image/igreja-porto.jpg`,
    alt: 'Casar'
  }
];


const Timeline = () => {
  return (
    <section className="romantic-timeline">
      {events.map((event, index) => (
        <div className="romantic-event" key={index}>
          <div className="romantic-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
          <div className='romantic-image'>
            <img src={event.image} alt={event.alt}/>
          </div>
        </div>
      ))}
      <div className="timeline-footer">
        <Link to="/puzzle"className="footer-button">Ir para outra página</Link>
      </div>
    </section>
  );
};

export default Timeline;