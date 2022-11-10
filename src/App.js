import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Users from './Components/Users';


const App = () => {
  return (
    <div> 
      <Router>
      
        <Routes>
          <Route path="/" element={<Users />}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;