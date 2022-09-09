import { useEffect, useState } from "react";
import { API } from "../services/API";


const MyBookings = () => {
    const [allMyBookings, setAllMyBookings] = useState([]);


const getAllMyBookings = async () => {
    API.get("/mybookings").then((resMyBookings) => {
    setAllMyBookings(resMyBookings.data.mybookings);
    });
    }; 

    useEffect (() => {
        getAllMyBookings(); 
    }, []);


    return (
    <section>
        <h2>Mis citas</h2>
        <div>
            {allMyBookings.length ? (
                allMyBookings.map((mybooking) => <p>{mybooking.name}</p>)
            ) : (
                <p>Buscando citas. Un momento, por favor...</p>
            )
        }
        </div>
       




    </section>


    )
};

export default MyBookings
    