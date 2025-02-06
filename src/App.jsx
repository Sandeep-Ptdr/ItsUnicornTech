import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
 

function App() {
   

  return (
      <>
        <Routes>
          <Route path='/' element={<UserLayout/>}>
            <Route index element={<HomePage />}/>
            <Route path='about' element={<AboutPage />}/>

          </Route>
        </Routes>
      </>
  )
}

export default App
