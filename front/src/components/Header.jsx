import "./Header.css";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const {usuario, logout} = useContext (JwtContext);
  let navigate = useNavigate(); 
  const handleLogout = () => {
    
     logout ();
     navigate ("/login"); console.log (navigate);

  }
    return (
    <header>
      <nav> 
        <img className="logo" src="./assets/Logo nukiro.jpg" alt="logo"/>
        <div className="control">
        <Link to="/booking">Mis citas</Link>
        {usuario ? ( <><p>Welcome {usuario.name}</p>
        <button onClick={() => handleLogout () }>Logout</button> 
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