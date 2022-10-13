import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UserHome from './Components/UserHome';
import Loginform from './Forms/Loginform';
import Registerform from './Forms/Registerform';
import PatientSidebar from './Patient/PatientSidebar';
import DoctorSidebar from './Doctors/DoctorSidebar';
import Testxx from './Test/Testxx';

const App = () => {
  return (
    <div>

      <BrowserRouter>
      {/* <DoctorSidebar /> */}
      <Routes>
        <Route path="/" element={<UserHome />}/>
        <Route path="/loginform" element={<Loginform />}/>
        <Route path="/registerform" element={<Registerform />} />
        <Route path="/sidebar"  element={<PatientSidebar />}/>
        <Route path="/docsidebar" element={<DoctorSidebar />} />
        <Route path="/test" element={<Testxx />} />
      </Routes>
      </BrowserRouter>
    </div>
  )

}


export default App;