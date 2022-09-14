import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../context/jwtContext";
import { API } from "../services/API";
import "./BookingCard.css";




const BookingCard = ({booking}) => {
    const {usuario} = useContext(JwtContext);
    let navigate = useNavigate();

    const deleteBooking = () => {
        if(booking){
            API.delete(booking._id).then ((res) => {
                window.location.reload();
            });
            
        };
    };

    const editBooking = (booking) => {
        setEditingBooking(booking);
        navigate("/editbooking");
    }


    return (
        <figure className="bookingcard">
        <h4 className="name">{booking.name}</h4>
        <p className="date">{booking.date}</p>
        <p className="time">{booking.time}</p>
        <p className="address">{booking.address}</p>
        <p className="amount">{booking.amount}</p>
        <p className="issue">{booking.issue}</p>
        {user ? (
        <>
          <button onClick={() => editBooking(booking)}>Edit</button>
          <button onClick={() => deleteBooking()}>Delete</button>
        </>
      ) : null}
        </figure>
    );
};

export default BookingCard