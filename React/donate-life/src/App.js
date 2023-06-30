import './App.css';
// import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Rest from './components/Rest';

function App() {
  return (
    <>
        <Navbar status = "fixed"/>
        {/* <Carousel/> */}
        <Rest/>
    </>
  );
}

export default App;
