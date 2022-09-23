import { useEffect, useState } from "react";
import { API } from "../services/API";
import BookingCard from "../components/BookingCard";
import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import { JwtContext } from "../context/jwtContext";
import "./Booking.css";



const Booking = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [filterWord, setFilterWord] = useState("");
    const {usuario} = useContext (JwtContext);
    const [usuarioId, setUsuarioId] = useState ("usuario");
    
    

    const filteredBookings = allBookings.filter((booking) =>
    booking.name.toLowerCase().includes(filterWord) ||
    booking.date.toLowerCase().includes(filterWord) ||
    booking.address.toLowerCase().includes(filterWord)||
    booking?.usuario?.name. toLowerCase().includes(filterWord)
    )
    const filteredUsuarioBookings = allBookings.filter ((booking) =>
    booking?.usuario?._id===usuarioId

    )
    

const getAllBookings = async () => {
    API.get("/citas").then((resCita) => {
    setAllBookings(resCita.data.citas) 
    })
  
    
    
    }; 

    useEffect (() => {
        getAllBookings(); 
        setUsuarioId(usuario._id)
    
    }, []);

  if (usuario._id==="632ab8a0ceb2d34c451e3dcf"){
    return (
        <section className="bookings">
            <h2>Citas clientes</h2>
            <SearchBar setFilterWord={setFilterWord} />
            <div className="cards">
                {filteredBookings.length ? (
                    filteredBookings.map((booking) => (
                        <BookingCard booking={booking} key={booking._id} />
                    ))
                ) : (
                    <p>Buscando citas. Un momento, por favor...</p>
                )
            }
            </div>
           
            {!filteredBookings.length ? <p>No se ha encontrado la cita</p> : null}
    
        </section>
    
    
        );

  } else {

  
    return (
    <section className="bookings">
        <h2>Mis citas</h2>
        <div className="cards">
            {filteredUsuarioBookings.length && usuarioId!=="usuario" ? (
                filteredUsuarioBookings.map((booking) => (
                    <BookingCard booking={booking} key={booking._id} />
                ))
            ) : (
                <p>No tiene ninguna cita reservada</p>
            )
        }
        </div>
       
      

    </section>


    )};
};

export default Booking
    