import './App.css'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/contacto' element = {<Contacto/>} />



    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
