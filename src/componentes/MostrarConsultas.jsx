import React from "react";

function MostrarConsultas({ consultas, deleteConsulta }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>

            <th>Id</th>
            <th>Nombre </th>
            <th>Telefono </th>
            <th>Email </th>
            <th>Descripcion </th>
            <th>Eliminar </th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta) => (
            <tr key={consulta.id}>
              <td>{consulta.id}</td>
              <td>{consulta.nombre}</td>
              <td>{consulta.telefono}</td>
              <td>{consulta.email}</td>
              <td>{consulta.descripcion}</td>
              <td>

                <button onClick={()=>deleteConsulta(consulta.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MostrarConsultas;
