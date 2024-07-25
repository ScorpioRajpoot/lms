import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from "./components/Home";
import About from "./components/About";
import Admin from "./components/Admin";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
function App() {
  return (



    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
