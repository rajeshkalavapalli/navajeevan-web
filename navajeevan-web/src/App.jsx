import { useState } from 'react';
import './App.css';
import Topbar from './components/Topbar.jsx';
import Navibar from './components/Navibar.jsx';
import Whoweare from './components/Whoweare.jsx';
import Ourwork from './components/Ourwork.jsx';
import Ourpartner from './components/Ourpartner.jsx';
import Media from './components/Media.jsx';
import Contact from './components/Contact.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Headerimage from './components/Headimages.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Topbar />
      <Navibar />
      <Headerimage/>
      <Routes>
        <Route path="/" element={<Whoweare />} />
        <Route path="/Whoweare" element={<Whoweare />} />
        <Route path="/Ourpartner" element={<Ourpartner />} />
        <Route path="/Ourwork" element={<Ourwork />} />
        <Route path="/Media" element={<Media />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
