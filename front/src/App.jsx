import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./context/jwtContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Confirming from "./pages/Confirming";
import Confirmed from "./pages/Confirmed";
import Booking from "./pages/Booking";
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
           <Route path="/calendar" element={<Calendar/>} />
           <Route path="/confirming" element={<Confirming/>} />
           <Route path="/confirmed" element={<RequireAuth><Confirmed/></RequireAuth>} />
           <Route path="/booking" element={<RequireAuth><Booking/></RequireAuth>} />
          

          
        </Routes>
      <Footer />
    </Router>
 </div>
</JwtContextProvider>
);
};

export default App;
