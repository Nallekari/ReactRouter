import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';



function App() {
  return (
    <div className="App">
      <div style={{fontSize:'30px', display:'flex', width:'100%',color:'white', background:'black', justifyContent:'center', align:'center', height: 100}}>
        <b style={{marginBottom: 0, marginTop: 15}}>Welcome to React router</b>
      </div>

      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link > {' '}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
