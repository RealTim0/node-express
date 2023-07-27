import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user} = useAuthContext()
  return (
   <BrowserRouter>
   <Navbar/>
   
    <Routes>
    <Route path="/" 
      element={<Welcome/>}
      ></Route>
      <Route path="/signup" 
      element={<Signup />}
      ></Route>
      <Route path="/login" 
      element={< Login />}
      ></Route>
    <Route exact path="/home" 
      element={user ? <Home />: <Navigate to="/" />}
      ></Route>
      <Route path="/contact" 
      element={user ? <Contact />: <Navigate to="/" />}
      ></Route>
      <Route path="/services" 
      element={< Services />}
      ></Route>
      <Route path="/about" 
      element={< About />}
      ></Route>
      <Route path="/profile" 
      element={user ? <Profile />: <Navigate to="/" />}
      ></Route>
      <Route path="/booking" 
      element={user ? <Booking />: <Navigate to="/" />}
      ></Route>
      <Route path="/bookings" 
      element={user ? <Bookings />: <Navigate to="/" />}
      ></Route>
    
      
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
