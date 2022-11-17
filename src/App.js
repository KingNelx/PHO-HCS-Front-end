import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Users from './Components/Users';
import PHOLogform from './PHO/PHOLogform';
import PHORegform from './PHO/PHORegform';
import PHOHome from './PHO/PHOHome';
import RHULogform from './RHU/RHULogform';
import RHURegform from './RHU/RHURegform';
import RHUHome from './RHU/RHUHome';
import PatientLogform from './Patient/PatientLogform';
import PatientRegform from './Patient/PatientRegform';
import PatientHOME from './Patient/PatientHOME';
import DoctorsList from './PHO/DoctorsList';
import PatientList from './PHO/PatientList';
import RHUList from './PHO/RHUList';
import QrCode from './Components/QrCode';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          {/* <Route path="/" element = {<Home />} /> */}
          <Route path="phoLogform" element={< PHOLogform />} />
          <Route path="phoRegform" element={<PHORegform />} />
          <Route path="phoHome" element={<PHOHome />} />
          <Route path="phoDocList" element={<DoctorsList />} />
          <Route path="phoPatientList" element={<PatientList />} />
          <Route path="phoRhuList" element={<RHUList />} />
          <Route path="qrCode" element={<QrCode />} />

          <Route path="rhuLogform" element={<RHULogform />} />
          <Route path="rhuRegform" element={<RHURegform />} />
          <Route path="rhuHome" element={<RHUHome />} />

          <Route path="patientLogform" element={<PatientLogform />} />
          <Route path="patientRegform" element={<PatientRegform />} />
          <Route path="patientHome" element={<PatientHOME />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;