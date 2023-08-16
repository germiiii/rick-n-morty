import './App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { Route,Routes, useLocation, useNavigate } from 'react-router-dom';
//!componentes 
import Nav from './components/Nav/Nav';
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Form from './components/Form/Form'
import Cards from './components/Cards/Cards';
import Favorite from './components/Favorites/Favorite';


function App() {
   const navigate = useNavigate();
   const [access , setAccess ] = useState(false);
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const EMAIL = 'Rick@emaildelespacio.com'
   const PASSWORD = 'morty1'

   function login (userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL)
      {
         setAccess(true);
         navigate('/home')
      }else{
         alert('A donde vamos lokito?')
      }
   }
   useEffect(()=>{
      !access && navigate('/');
   },[access , navigate]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      const parseId = parseInt(id);
      setCharacters((oldChars) => oldChars.filter((character)=> character.id !== parseId));
      }
   // antes de utilizar el metodo filter parseamos el id recibido a un entero, luego filtramos y dejamos todos los elementos que no sean el elemento buscado
   // 
   return (
      <div className='background'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
         <Route path='/' element={<Form login={login}/>} />
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         <Route path='/about' element={<About/>} />
         <Route path='/detail/:id' element={<Detail />} />
         <Route path='/favorites' element={<Favorite />}/>
         </Routes>
      </div>
   );


}
export default App;

