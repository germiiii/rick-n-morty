import Card from '../Card/Card';
import styles from './Cards.module.css';

let { cardContainer } = styles;

export default function Cards({ characters, onClose }) {
   return (
      <div className={cardContainer}>
        {characters.map(character => (
          <Card 
            key={character.id}
            {...character}
            onClose={onClose}
          />
        ))}
      </div>
    );
  };