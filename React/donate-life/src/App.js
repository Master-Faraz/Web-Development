import './App.css';
import DonateBlood from './components/DonateBlood';
import FindBloodBank from './components/FindBloodBank';
import Find_Donor from './components/FindDonor';
import Find_Hospital from './components/FindHospital';
import HomeComponent from './components/HomeComponent';
import Navbar from './components/Navbar';

import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar status="fixed" />
      <Routes>
        <Route>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/home" element={<HomeComponent />} />
          <Route exact path="/donor" element={<Find_Donor />} />
          <Route exact path="/bloodbanks" element={<FindBloodBank />} />
          <Route exact path="/hospital" element={<Find_Hospital />} />
          <Route exact path="/donateblood" element={<DonateBlood name = "Faraz Ali Ahmad" contact = "9661918210" bg = "AB+" city = "Patna" state = "Bihar"/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  
  );
}



export default App;
