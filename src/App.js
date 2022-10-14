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
import DocTopNav from './Doctors/DocTopNav';
import DoctorsProfile from './Doctors/DoctorsProfile';
import PatientList from './Components/PatientList';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        {/* <DoctorSidebar /> */}
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/registerform" element={<Registerform />} />
          <Route path="/doctopnav" element={<DocTopNav />} />
          <Route path="/profile" element={<DoctorsProfile />} />
          <Route path="patientlist" element={<PatientList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}


export default App;