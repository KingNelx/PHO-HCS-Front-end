import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Users from './Components/Users';
import PHOLogform from './PHO/PHOLogform';
import PHORegform from './PHO/PHORegform';
import PHOHome from './PHO/PHOHome';
import RHULogform from './RHU/RHULogform';
import RHURegform from './RHU/RHURegform';
import RHUHome from './RHU/RHUHome';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />

          // pho

          <Route path="phoLogform" element={< PHOLogform />} />
          <Route path="phoRegform" element={<PHORegform />} />
          <Route path="phoHome" element={<PHOHome />} />

          // rhu

          <Route path="rhuLogform" element={<RHULogform />} />
          <Route path="rhuRegform" element={<RHURegform />} />
          <Route path="rhuHome" element={<RHUHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;