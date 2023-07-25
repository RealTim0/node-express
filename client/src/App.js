import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup'
import Welcome from "./pages/Welcome";
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Profile from "./pages/Profile"
import Booking from "./pages/Booking"
import Bookings from "./pages/Bookings"

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   
    <Routes>
    <Route exact path="/" 
      element={<Welcome/>}
      ></Route>
      <Route path="/signup" 
      element={<Signup />}
      ></Route>
      <Route path="/login" 
      element={< Login />}
      ></Route>
      <Route path="/home" 
      element={< Home />}
      ></Route>
      <Route path="/contact" 
      element={< Contact />}
      ></Route>
      <Route path="/services" 
      element={< Services />}
      ></Route>
      <Route path="/about" 
      element={< About />}
      ></Route>
      <Route path="/profile" 
      element={< Profile />}
      ></Route>
      <Route path="/booking" 
      element={< Booking />}
      ></Route>
      <Route path="/bookings" 
      element={< Bookings />}
      ></Route>
    
      
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
