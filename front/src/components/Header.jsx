import "./Header.css";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const {usuario, logout} = useContext (JwtContext);
  let navigate = useNavigate();

    return (
    <header>
      <nav> 
        <img className="logo" src="./assets/Logo nukiro.jpg" alt="logo"/>
        <div className="control">
        {usuario ? ( <><p>Welcome {usuario.name}</p>
        <button onClick={() => logout () & navigate("/login")}>Logout</button> 
          </>
        
    ) : (
      
      <ul className="options">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>
    )}
      </div>
      </nav> 
      
    </header>

    );
};

export default Header