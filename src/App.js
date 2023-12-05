import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toppage from './pages/Top';
import Menu from './components/menu';
import Blog from './pages/Blog'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Toppage />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// react-rooter-domのアップデートしたら治るかも