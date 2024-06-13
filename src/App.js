import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import News from './pages/News';
import Tools from './pages/Tools';
import Newsletter from './pages/Newsletter';

const App = () => {
  return (
    
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/news" element={<News />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </div>
  );
}

export default App;
