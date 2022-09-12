import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import { Link } from "react-router-dom";

import "./Register.css";

const Register = () => {
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const formSubmit = (formData) => {
           API.post("/usuarios/register", formData).then((res) => {
           if (res) {
            navigate("/login");
           }
        });
       
    };
     

    return (
    <section className="register">
    <h2>Por favor, regístrate:</h2>
    <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="name">Nombre completo</label>
        <input type="text" id="name" name="name" {...register("name")} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" {...register("email")} />
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" {...register("password")} />
        <label htmlFor="mobile">Teléfono</label>
        <input type="number" id="mobile" name="mobile" {...register("mobile")} />
        <label htmlFor="address">Dirección</label>
        <input type="text" id="address" name="address" {...register("address")} />
        <label htmlFor="issue">Motivo</label>
        <input type="text" id="issue" name="issue" {...register("issue")}/>
        <button type="submit">Regístrate</button>
        
        <Link to="/login">Ya tengo cuenta</Link>
       


    </form>
   
    </section>
    )
};

export default Register