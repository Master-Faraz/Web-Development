import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" prop1="My Home" prop2="About US" />
      {/* container class in bootstrap for alligning in center  and my-3 -> margin 3 in y*/}
      <div className="container my-3">
        <TextForm heading="Enter the text to analize" />

      </div>

      
    </>
  );
}

export default App;
