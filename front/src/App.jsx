import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./context/jwtContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import Booking from "./pages/Booking";
import EditBooking from "./pages/EditBooking";
import RequireAuth from "./components/RequiredAuth";



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
           <Route path="/calendar" element={<RequireAuth><Calendar/></RequireAuth>} />
           <Route path="/booking" element={<RequireAuth><Booking/></RequireAuth>} />
           <Route path="/editbooking" element={<RequireAuth><EditBooking/></RequireAuth>} />
        </Routes>
      <Footer />
    </Router>
 </div>
</JwtContextProvider>
);
};

export default App;
