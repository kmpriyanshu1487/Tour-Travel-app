import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/contact";
import LoginSignup from "./Components/Signup_Login/LoginSignup";
import CarTypes from "./Pages/CarTypes/CarTypes";
import FAQ from "./Routes/FAQ";
import Booking from "./Routes/Booking";
import VehicleCard from "./Pages/vehicleCard/vehicleCard";
import Tempotraveller from "./Pages/Tempotraveller/Tempotraveller";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/carTypes" element={<CarTypes />} />
        <Route path="/tempotraveller" element={<Tempotraveller />} />
        <Route />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/vehiclecard" element={<VehicleCard />} />
      </Routes>
    </div>
  );
}

export default App;
