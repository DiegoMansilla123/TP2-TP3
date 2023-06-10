import React from 'react'
import Main from '../componentes/Main'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'


export default function Home() {
  
  const alumno = {nombre: "Diego", apellido: "Mansilla", edad: 25, legajo: 55954};

  


  return (
    <div>
        <Header/>
        <Main 
        alumno = {alumno}

        />
        <Footer/>
    </div>
  )
}
