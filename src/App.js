import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toppage from './pages/Top';
import Blog from './pages/Blog';
import Menu from './components/menu';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <body>
      <Router>
      <Menu />
        <Routes>
          <Route path='/' element={<Toppage />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Blog/page' element={<BlogPage />} />
          <Route path='/Blog/page/スパイダーマン' element={<BlogPage />} />
        </Routes>
        <Footer class="Footer" />
      </Router>
    </body>
  );
}

export default App;

// react-rooter-domのアップデートしたら治るかも