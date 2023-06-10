import React from 'react'

export default function Main({alumno})





{
  return (
    <div className='DivMain'>



<div className="card">
    <div className="card-body">
    <h5 className="card-title">{alumno.nombre}  {alumno.apellido}</h5>
    <br />

    <p className="card-text">
      Legajo {alumno.legajo}
      <br />  
      <br />
      Edad
      <br />
      {alumno.edad}
    </p>
  </div>


</div>
        <br/>
        <br/>
        <br />
<p>
        Buenas. Mi nombre es Diego Gabriel Mansilla. Soy estudiante de Tecnicatura en Programación, estoy en el segundo año y aspiro a poder aprender y realizar desarrollo web.
</p>

<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis accusamus deserunt voluptas repellendus dolores eum nemo eveniet aut repudiandae, quaerat doloremque sint nesciunt rerum dolorem tempora vel. Consequuntur, pariatur ullam.</p>

<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fuga earum nobis sint maiores, animi ad, id natus esse necessitatibus dolores odio adipisci officia mollitia porro cumque veniam repudiandae labore?</p>


<br />
<br />  
<br />  
    </div>
  )
}
