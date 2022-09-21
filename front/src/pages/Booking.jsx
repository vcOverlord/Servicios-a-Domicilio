import { useEffect, useState } from "react";
import { API } from "../services/API";
import BookingCard from "../components/BookingCard";
import SearchBar from "../components/SearchBar";
import "./Booking.css";



const Booking = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [filterWord, setFilterWord] = useState("");
    
    const filteredBookings = allBookings.filter((booking) =>
    booking.name.toLowerCase().includes(filterWord) ||
    booking.date.toLowerCase().includes(filterWord) ||
    booking.address.toLowerCase().includes(filterWord) 

    )


const getAllBookings = async () => {
    API.get("/citas").then((resCita) => {
    setAllBookings(resCita.data.citas);
    console.log(allBookings);
    });
    }; 

    useEffect (() => {
        getAllBookings(); 
    }, []);


    return (
    <section className="bookings">
        <h2>Mis citas</h2>
        <SearchBar setFilterWord={setFilterWord} />
        <div className="cards">
            {allBookings.length ? (
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
};

export default Booking
    