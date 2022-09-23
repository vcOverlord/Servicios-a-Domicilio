import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import { useState } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import "./Calendar.css";


const Calendar = () => {
 const [confirming, setConfirming] = useState (false);
 const [allBookings, setAllBookings] = useState([]); 
 const [book, setBook] = useState([]);
 const [correctDate, setCorrectDate] = useState (true);
 const {usuario} = useContext (JwtContext);


  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  let timerInterval
  const getAllBookings = async () => {
    API.get("/citas").then((resCita) => {
    setAllBookings(resCita.data.citas);
    console.log (allBookings);
    });
    }; 

    useEffect (() => {
        getAllBookings();
       
    }, []);
    
    const checkDate = (value) => {
      console.log (value);
      for (const booking of allBookings) {
        if (booking.date==value) { 
        setCorrectDate(false);
        
        }
        else {setCorrectDate (true)};
      };
    };

  const formSubmit = (formData) => { console.log (formData)

         API.post("/citas/create", formData).then((res) => {
         if (res) {
          setBook (res.citaInDB)
          setConfirming (true)
        
         }
      });
     
    };
    
    const travelBooking = () => {
      navigate("/booking")
      

    }

    const travelCalendar = () => {
    window.location.reload ()
    }


    if ( confirming ) { 
      return (
        <section className="calendar">
          <h2>¿Quieres confirmar la cita?</h2>
          
          
          <button  onClick={()=> 
          Swal.fire("Reserva confirmada. Puedes cambiar tu cita hasta 12h antes de la sesión. Muchas gracias"
          ) & travelBooking() }>SI</button>
          
         

          <button onClick={()=>
          Swal.fire({
            title: 'Reserva anulada',
            html: 'Por favor, rellena el formulario si deseas volver a solicitar cita. Gracias.',
            timer: 4000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
             window.location.reload ()
            }
          })
          

          }>NO</button>
          

        
        </section>
      )

    }
   
    return (
      
        <section className="calendar">
          
          <label htmlFor="start"><h2>Solicita tu reserva:</h2></label>

              <form onSubmit={handleSubmit(formSubmit)}>
                {!correctDate ? <p></p> : null }
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required {...register("name")} />
                <label htmlFor="date">Fecha</label>
                <input type="text" id="date" name="date" placeholder="dd/mm/yyyy" required {...register("date")} onChange={() => checkDate (date.value)} />
                <label htmlFor="time">Hora</label>
                <input type="number" id="time" name="time"  placeholder="hh:mm" required min={11} max={21} {...register("time")} />
                <label htmlFor="address">Dirección</label>
                <input type="address" id="address" name="address" required {...register("address")} />
                <label htmlFor="mobile">Teléfono</label>
                <input type="number" id="mobile" name="mobile" required {...register("mobile")} />
                <label htmlFor="amount">Cantidad</label>
                <input type="number" id="amount" name="amount" required min={1} max={4} {...register("amount")} />
                <label htmlFor="issue">Motivo</label>
                <input type="text" id="issue" name="issue" required maxLength={25} placeholder="Max.35 caracteres" {...register("issue")}/>
                <input type="hidden" value={usuario?._id} {...register("usuario")} />
                <button type="submit">Confirmar</button>
               
              </form>
          
        </section>
  
    )
};

export default Calendar