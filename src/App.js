import './App.css';
import { Home, LogIn, Tempurature, Humidity, Watering, Moisture } from './pages';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/humidity" element={<Humidity />}/>
        <Route path="/temperature" element={<Tempurature />}/>
        <Route path="/moisture" element={<Moisture />}/>
        <Route path="/watering" element={<Watering />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
