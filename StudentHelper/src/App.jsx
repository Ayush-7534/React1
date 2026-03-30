import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from "./Components/About";
import './App.css'

function App() {

  return (
        <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Header" element={< Header />} />
      <Route path="/About" element={< About />}   />
      <Route path="/Footer" element={< Footer />}   />
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
