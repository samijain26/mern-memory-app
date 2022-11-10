import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import About from './components/About';
// import MemoryState from './context/memoryState';
function App() {
  return (
    <>
      {/* <MemoryState> */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/* </MemoryState> */}
    </>
  );
}


export default App;
