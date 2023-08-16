import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from './About.module.css'

const About = () => {
    return (
        <>
        <div className={styles.container}>
        <h1 className={styles.title}>Ola lokitos, bienvenidos a mi reino</h1>
        <p className={styles.paragraph}>En esta tierra no democratica governada por el creador todo poderoso
            German Torres, las reglas son y seran un poco distintas a las que ya conoces
            para empezar, los textos seran normalizados y el disenio sera minimalista.
        </p>
        <p className={styles.paragraph}>
            Por alguna razon nos gusta mucho rick y morty
            (por alguna razon no, tiene ciencia y violencia, que mas?)
        </p>

        <Button><Link to='/home'>pa la casa</Link></Button>
        </div>
        </>
    );
};

export default About