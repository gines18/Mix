import React from 'react'; // Import useRef
import './Styles.css';
import Cards from './Cards.jsx';
import { colors } from './Data';

const category = [
  {
    title: 'Colors',
    cardText: <Cards cardData={colors} />,
  },
];

const CardContainer = () => {
  return (
    <>
      <div className="card-container-title">
        {category.map((card, index) => (
          <div key={index} className="card-item" id={card.title}>
            <div className="title">
              <h1>{card.title}</h1>
            </div>
            <h1>{card.cardText}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardContainer;
