import { useState } from "react";
import validation from "./validation";
import Styles from './Form.module.css';
import Button from '../Button/Button.jsx'

let {myError} = Styles

const Form = ({ login }) => {

    const [userData, setUserData]= useState({
        email:"",
        password:"",
    });

    const [errors , setErrors] = useState({
        email:'',
        password:'',
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
    })
    setErrors (
        validation({
            ...userData,
            [event.target.name] : event.target.value,
        })
    );
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (

        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email: </label>
            <input type="text"
                   name="email"
                   placeholder="Rick@emaildelespacio.com"
                   value={userData.email} 
                   onChange={handleChange} 
                   className={errors.email  && myError}/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" 
                       name="password"
                       placeholder="MITERIO" 
                       value={userData.password} 
                       onChange={handleChange} 
                       className={errors.password && myError}/>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default Form