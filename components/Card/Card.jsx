import React, { useEffect,useState } from 'react'; //por una cuestion de testing React.useState
import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../../redux/actions';
import { connect } from 'react-redux'
import Button from '../Button/Button';
import styles from './Card.module.css'


const Card = ({ onClose, name, status, species, gender, origin, image ,id , addFavorites, removeFavorites, myFavorites}) => {
   
  const [isFav, setIsFav] = useState (false)

  useEffect(()=> {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  },[myFavorites])

  const handleFavorite = () => {
    if (isFav){
      setIsFav(false)
      removeFavorites(id)
    } else {
      setIsFav(true)
      addFavorites({name,status,species,image,id})
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
      <Button onClick={() => onClose(id)} className={styles.closeButton}>
        X
      </Button>
      <h2 className={styles.title}>
        Id: {id} - <Link to={`/detail/${id}`} className={styles.link}>{name}</Link>
      </h2>
      <h3 className={styles.subtitle}>Status: {status}</h3>
      <h3 className={styles.subtitle}>Species: {species}</h3>
      <h3 className={styles.subtitle}>Gender: {gender}</h3>
      <h3 className={styles.subtitle}>Origin: {origin.name}</h3>
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
