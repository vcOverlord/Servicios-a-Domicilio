import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Calendar.css";


const Calendar = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const formSubmit = (formData) => { console.log (formData)

         API.post("/citas/create", formData).then((res) => {
         if (res) {
          navigate("/confirming");
          console.log (formData)
         }
      });
     
  };
   
    return (
      
        <section className="calendar">
          
          <label htmlFor="start"><h2>Solicita tu reserva:</h2></label>

              <form onSubmit={handleSubmit(formSubmit)}>
             
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" {...register("name")} />
                <label htmlFor="date">Fecha</label>
                <input type="text" id="date" name="date" {...register("date")} />
                <label htmlFor="time">Hora</label>
                <input type="number" id="time" name="time" min={11} max={21} {...register("time")} />
                <label htmlFor="address">Dirección</label>
                <input type="address" id="address" name="address" {...register("address")} />
                <label htmlFor="amount">Cantidad</label>
                <input type="number" id="amount" name="amount" min={1} max={4} {...register("amount")} />
                <label htmlFor="issue">Motivo</label>
                <input type="text" id="issue" name="issue" {...register("issue")}/>
                <button type="submit">Confirmar</button>
               
              </form>
          
        </section>
  
    )
};

export default Calendar