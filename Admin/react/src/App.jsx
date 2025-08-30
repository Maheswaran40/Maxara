import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from "./pages/Form"
import Context from './context/Context'
import UserDetails from './pages/UserDetails'
function App() {
  return (
      
   <Context>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Form/>}/>
    <Route path='/getUser' element={<UserDetails/>}/>
   </Routes>
   </BrowserRouter>
   </Context>
    
  )
}

export default App