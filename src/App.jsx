import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
 

function App() {
   

  return (
      <>
        <Routes>
          <Route path='/' element={<UserLayout/>}>
            <Route index element={<HomePage />}/>
            <Route path='/services' element={<ServicesPage />}/>

          </Route>
        </Routes>
      </>
  )
}

export default App
