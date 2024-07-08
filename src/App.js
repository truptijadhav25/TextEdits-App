import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import TextEdits from './components/TextEdits';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<TextEdits />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
