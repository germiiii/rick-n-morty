import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const About = () => {
    return (
        <>
        <h1>Ola lokitos, bienvenidos a mi reino</h1>
        <p>En esta tierra no democratica governada por el creador todo poderoso
            German Torres, las reglas son y seran un poco distintas a las que ya conoces
            para empezar, los textos seran normalizados y el disenio sera minimalista.
        </p>
        <p>
            Por alguna razon nos gusta mucho rick y morty
            (por alguna razon no, tiene siencia y violencia, que mas?)
        </p>

        <Button><Link to='/home'>pa la casa</Link></Button>
        </>
    );
};

export default About