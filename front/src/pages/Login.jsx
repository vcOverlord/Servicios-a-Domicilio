import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Login.css";


const Login = () => {

    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();
    const { setJwt, setUsuario } = useContext(JwtContext);

    const formSubmit = (formData) => {
        API.post("/usuarios/login", formData).then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("usuario", JSON.stringify(res.data.usuarioInDb));
            setJwt(res.data.token);
            setUsuario(res.data.usuarioInDb);
            if (res.data.token) {
            navigate("/calendar")
            }
            
        })
    }


    return (
    <section className="login">
        <h2>Please log in:</h2>
    <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="name">Email</label>
        <input type="text" id="email" name="email" {...register("email")} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" {...register("password")} />
        <button type="submit">Login</button>
    </form>
    </section>
    )
};

export default Login