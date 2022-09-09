import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <header>
      <nav> 
        <img className="logo" src="./assets/Logo nukiro.jpg" alt="logo"/>
         <Link to="#"></Link>
      </nav> 
    </header>

    )
};

export default Header