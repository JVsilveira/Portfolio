import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/home/home'
import Me from '../components/me/me'
import Contact from '../components/contact/contact'
import Projects from '../components/projects/projects'

export default () => (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="/me" element={<Me />} />
    <Route path="/project" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Home />} />
  </Routes>
)
