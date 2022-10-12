import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserHome from './Components/UserHome';
import Loginform from './Forms/Loginform';
import Registerform from './Forms/Registerform';
import PatientSidebar from './Patient/PatientSidebar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />}/>
        <Route path="/loginform" element={<Loginform />}/>
        <Route path="/registerform" element={<Registerform />} />
        <Route path="/sidebar"  element={<PatientSidebar />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )

}


export default App;