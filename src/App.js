import './App.css';
import Homepage from './Page/Homepage/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Loginpage from './Page/Loginpage/Loginpage';
import Signpage from './Page/Signpage/Signpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/clientlogin" element={<Loginpage />} />
    <Route path="/clientsignup" element={<Signpage />} />
    </Routes>
    </BrowserRouter>

  
  );
}

export default App;
