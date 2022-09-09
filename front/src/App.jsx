import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Timings from "./pages/Timings";
import Availability from "./pages/Availability";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Confirmed from "./pages/Confirmed";
import MyBookings from "./pages/MyBookings";
import AdminReservations from "./pages/AdminReservations";
import AdminUpdate from "./pages/AdminUpdate";

const App = () => {
 return <div>
 <Router>
   <Header/>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/calendar" element={<Calendar/>} />
     <Route path="/timings" element={<Timings/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/availability" element={<Availability/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/booking" element={<Booking/>} />
     <Route path="/confirmed" element={<Confirmed/>} />
     <Route path="/mybookings" element={<MyBookings/>} />
     <Route path="/adminreservations" element={<AdminReservations/>} />
     <Route path="/adminupdate" element={<AdminUpdate/>} />
    
 
   </Routes>


<Footer/>
 </Router>




 </div>;
};

export default App;
