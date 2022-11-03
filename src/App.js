import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Homepage /> } />
          <Route path='/contact' element={ <Contactpage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
