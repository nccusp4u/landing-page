import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
