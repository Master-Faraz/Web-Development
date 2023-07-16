import './App.css';
import Find_Blood_Bank from './components/Find_Blood_Bank';
import Find_Donor from './components/Find_Donor';
import Find_Hospital from './components/Find_Hospital';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar status="fixed" />
      {/* <Find_Donor /> */}
      {/* <Find_Blood_Bank/> */}
      {/* <Find_Hospital/> */}
      <Home/>
    
    </div>
  );
}

export default App;
