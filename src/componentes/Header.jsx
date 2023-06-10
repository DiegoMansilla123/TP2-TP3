import React from 'react'
import IMG1 from "../assets/imagen_1.jpg"
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

export default function Header() {
  return (
<div className='DivHeader2'>
<div className='DivHeader'>

        <img src={IMG1} alt="" className='IMG1' />
       <h1>Mansilla Diego Gabriel</h1>
       <div>
        <ul>
        <li>
          <Link to={"/contacto"}>
          Voy a Contacto
          </Link>
        </li>
        <li>
          <Link to={"/"}>
          Voy a Inicio
          </Link>
        </li>
        </ul>
       </div>


    </div>
  </div>
  
  
  ) 

}
