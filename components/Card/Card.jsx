import React, { useEffect,useState } from 'react'; //por una cuestion de testing React.useState
import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../../redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button';
import styles from './Card.module.css'


const Card = ({ onClose, name, status, species, gender, origin, image ,id}) => {
   
  const [isFav, setIsFav] = useState (false)
  let dispatch = useDispatch();
  let miFav = useSelector(state => state.myFavorites);

  useEffect(()=> {
    miFav.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  } , [miFav])

  const handleFavorite = () => {
    if (isFav){
      setIsFav(false)
      dispatch(removeFav(id))
    } else {
      setIsFav(true)
      dispatch(addFav({name,species,image,id,gender}))
    }
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        {isFav ? (
          <Button onClick={handleFavorite} className={styles.favoriteButton}>
            ❤️
          </Button>
        ) : (
          <Button onClick={handleFavorite} className={styles.favoriteButton}>
            🤍
          </Button>
        )}
      </div>
      {
      onClose ? <Button onClick={() => onClose(id)} className={styles.closeButton}>X</Button> : null
      }
      <h2 className={styles.title}>
        Id: {id} - <Link to={`/detail/${id}`} className={styles.link}>{name}</Link>
      </h2>
      <h3 className={styles.subtitle}>Status: {status}</h3>
      <h3 className={styles.subtitle}>Species: {species}</h3>
      <h3 className={styles.subtitle}>Gender: {gender}</h3>
      <h3 className={styles.subtitle}>Origin: {origin?.name}</h3>
      <img src={image} alt='Photo not found' className={styles.image} />
    </div>
  );
};

export function mapDispatchToProps (dispatch){
  return {
    addFavorites: function (character){
      dispatch(addFav(character))
    },
    removeFavorites: function(id){
      dispatch(removeFav(id))
    }
  }
}

function mapStateToProps (state){
  return{
     myFavorites: state.myFavorites
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)
