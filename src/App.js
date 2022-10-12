import './App.css';
import Homepage from './Page/Homepage/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Loginpage from './Page/Loginpage/Loginpage';
import Signpage from './Page/Signpage/Signpage';
import Studentlogin from './Page/Studentlogin/Studentlogin';
import Studentsignup from './Page/Studentsignup/Studentsignup';
import Teacherhome from './Page/Teacherhome/Teacherhome';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/clientlogin" element={<Loginpage />} />
    <Route path="/clientsignup" element={<Signpage />} />
    <Route path="/studentlogin" element={<Studentlogin />} />
    <Route path="/studentsignup" element={<Studentsignup />} />
    <Route path="/teacher" element={<Teacherhome />} />
    </Routes>
    </BrowserRouter>

  
  );
}

export default App;
