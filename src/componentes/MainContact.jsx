import React from "react";
import { useState } from "react";
import MostrarConsultas from "./MostrarConsultas";

export default function MainContact() {
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState("Diego");
  const [email, setEmail] = useState("diegomansillaa@hotmail.com");
  const [telefono, setTelefono] = useState("3816229419");
  const [descripcion, setDescripcion] = useState("Bronceado");
  const [consultas, setConsultas] = useState([]);

  const deleteConsulta = (id) => {
    const resultado = consultas.filter(consulta=> consulta.id !== id)
    setConsultas(resultado)

  }


  const handlerSubmit = (e) => {
    e.preventDefault();

    setConsultas([...consultas,{id, nombre, email, telefono, descripcion}])
    setId(id+1)

    e.target.reset()
    alert("consulta enviada")
    
          




  };

  return (
    <div className="container m-auto bg-success">
      <form onSubmit={handlerSubmit}>
        <br />
        <br />
        <label className="form-label">Nombre: </label>
        <input type="Nombre" onChange={(e) => setNombre(e.target.value)} required/>
        <br /> <br />
        <label htmlFor="">Email: </label>
        <input type="Email" onChange={(e) => setEmail(e.target.value)}required/>
        <br />
        <br />
        <label htmlFor="">Telefono: </label>
        <input type="Telefono" onChange={(e) => setTelefono(e.target.value)}required/>
        <br />
        <br />
        <label htmlFor="">Descripcion:  </label>
        <input type ="Descripción" onChange={(e) => setDescripcion(e.target.value)}required/>
        <br />
        <br />
        <br />
        <button>Enviar</button>
        <br />
        <br />
      </form>

      <MostrarConsultas deleteConsulta={deleteConsulta} consultas = {consultas}/>
      
    </div>
  );
}
