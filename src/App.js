import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';

// Authors: De Leon, Jaymie Anne P. & Pastrana, Karl Anjelo D. || Section: 4ITC

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element = {<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
