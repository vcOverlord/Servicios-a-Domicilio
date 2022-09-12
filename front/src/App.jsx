import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./context/jwtContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Availability from "./pages/Availability";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Confirmed from "./pages/Confirmed";
import MyBookings from "./pages/MyBookings";
import EditBookings from "./pages/EditBookings"



const App = () => {
 return ( 
 <JwtContextProvider>
   <div>
     <Router>
       <Header />
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/calendar" element={<Calendar/>} />
           <Route path="/availability" element={<Availability/>} />
           <Route path="/booking" element={<Booking/>} />
           <Route path="/confirmed" element={<Confirmed/>} />
           <Route path="/mybookings" element={<MyBookings/>} />
           <Route path="/editbookings" element={<EditBookings/>} />
          
        </Routes>
      <Footer />
    </Router>
 </div>
</JwtContextProvider>
);
};

export default App;
