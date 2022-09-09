import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (

      <section className="home">
        <h1>¡Bienvenid@s a Nukiro Masajes!</h1>
        <Link to="/calendar">Reserva tu sesión a domicilio</Link>

      </section>
       
    )
};

export default Home