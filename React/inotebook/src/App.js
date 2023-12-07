import './App.css';

import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { About } from './components/About';
import NoteState from './Context/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert msg="This is alert"/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
