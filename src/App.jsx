import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './index.css';
import Home from './components/Home'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Tech from './components/About/Tech';
import Dev from './components/About/Dev';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="about/tech" element={<Tech />} />
        <Route path="about/dev" element={<Dev />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Route>
      </Routes>
    </>
  )
}

export default App