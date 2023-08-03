import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Outlet, Route,Routes } from 'react-router-dom';
import About from './views/About/About';
import Detail from './views/Detail/Detail';


function App() {
   const [characters, setCharacters] = useState([]);


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
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
         <Route path='/' element={<Outlet />} />
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         <Route path='/about' Component={About} />
         <Route path='/detail/:id' Component={Detail} />
         </Routes>
      </div>
   );


}
export default App;

