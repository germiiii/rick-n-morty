import Card from '../Card/Card';
import styles from './Cards.module.css';

let { background, cardContainer } = styles;

export default function Cards({ characters, onClose }) {
   return (
      <div className={background}>
         <div className={cardContainer}>
            {characters.map(({ id, name, status, species, gender, origin, image }) => (
               <Card
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
                  onClose={onClose}
               />
            ))}
         </div>
      </div>
   );
}