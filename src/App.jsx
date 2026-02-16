import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/> 
      <Hero/>
      <Projects/>
      <Contact/>
      <footer className="py-10 text-center text-gray-400 text-sm">
        &copy; 2026 Yash. All rights reserved.
      </footer>
    </>
  )
}

export default App