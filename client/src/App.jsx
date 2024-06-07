// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import LifeInsurance from "./Pages/Insurance/LifeInsurance";
import VehicleInsurance from "./Pages/Insurance/VehicleInsurance";
import HomeInsurance from "./Pages/Insurance/HomeInsurance";
import HealthInsurance from "./Pages/Insurance/HealthInsurance";

import VehicleForm from "./Pages/Insuranceform/VehicleForm";
import HomeForm from "./Pages/Insuranceform/HomeForm";
import HealthForm from "./Pages/Insuranceform/HealthForm";
import LifeForm from "./Pages/Insuranceform/LifeForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Sign-in" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/lifeinsurance" element={<LifeInsurance />} />
          <Route path="/vehicleinsurance" element={<VehicleInsurance />} />
          <Route path="/homeinsurance" element={<HomeInsurance />} />
          <Route path="/healthinsurance" element={<HealthInsurance />} />
          <Route path="/vehicleform" element={<VehicleForm />} />
          <Route path="/homeform" element={<HomeForm />} />
          <Route path="/healthform" element={<HealthForm />} />
          <Route path="/lifeform" element={<LifeForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
