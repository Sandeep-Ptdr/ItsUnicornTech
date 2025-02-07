import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Portfolio from './pages/PortfollioPage'
import ContactUsPage from './pages/ContactUsPage'
import ServicesPage from './pages/ServicesPage'
 

function App() {
   

  return (
      <>
        <Routes>
          <Route path='/' element={<UserLayout/>}>
            <Route index element={<HomePage />}/>
            <Route path='about' element={<AboutPage />}/>
            <Route path='portfolio' element={<Portfolio />}/>
            <Route path='contact' element={<ContactUsPage />}/>
            <Route path='/services' element={<ServicesPage />}/>
          </Route>
        </Routes>
      </>
  )
}

export default App
