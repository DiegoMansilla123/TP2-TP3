import React from 'react'
import IMG1 from "../assets/imagen_1.jpg"
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

export default function Header() {
  return (


    <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li><img src={IMG1} alt="" className='IMG1' /></li>
          <li class="nav-item">
            <Link className='nav-link'to={"/"}>
          Voy a Inicio
          </Link>
          </li>

          <li class="nav-item">
          <Link className='nav-link' to={"/contacto"}>
          Voy a Contacto
          </Link>
          </li>



          <li class="nav-item active">
          <Link className='nav-link' to={"/about"}>
         Voy a About
          </Link>
          </li>


          


         
       
        </ul>
      </div>
    </div>
  </nav>

/* <div className='DivHeader2'>
<div className='DivHeader'>

        
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
        <li>
         
        </li>
        </ul>
       </div>


    </div>
  </div> */
  
  
  ) 

}
