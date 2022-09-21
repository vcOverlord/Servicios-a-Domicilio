import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/API";
import Swal from "sweetalert2";
import "./BookingCard.css";


const BookingCard = ({booking}) => {
    const {usuario, setEditingBooking} = useContext(JwtContext);
    let navigate = useNavigate();

    const deleteBooking = () => {
        Swal.fire({
          title: "¿Estas seguro de borrar tu cita?",
          text: "No la vas a poder recuperar",
          showCancelButton: true,
          confirmButtonColor: "#60d6f3",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, ¡borrala!",
          
        }).then((result) => {
          if (result.isConfirmed) {
            if (booking) {
              API.delete(`/citas/${booking._id}`).then((res) => {
                window.location.reload();
              });
            
            }
          }
        });
      };

    const editBooking = (booking) => {
        setEditingBooking(booking); console.log (booking);
        navigate("/editbooking");
    }


    return (
        <figure className="bookingcard">
        <h4 className="name">{booking.name}</h4>
        <p className="date">Fecha - {booking.date}</p>
        <p className="time">Hora - {booking.time}h</p>
        <p className="address">Fecha - {booking.address}</p>
        <p className="mobile">Teléfono - {booking.mobile}</p>
        <p className="amount">Masajes - {booking.amount}</p>
        <p className="issue">Motivo - {booking.issue}</p>
        {usuario ? (
        <>
          <button onClick={() => editBooking(booking)}>Edit</button>
          <button onClick={() => deleteBooking(booking)}>Delete</button>
        </>
      ) : null}
        </figure>
    );
};
    

export default BookingCard