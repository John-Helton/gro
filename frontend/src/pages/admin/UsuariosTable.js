import React from "react";
import ListTable from "./ListTable";

const UsuariosTable = () => {
  // Lógica específica de UsuariosTable

  const data = []; // Tu data específica

  return (
    <ListTable
      title="Lista de Usuarios"
      data={data}
      onEdit={(id) => console.log(`Editar usuario con ID ${id}`)}
      onDelete={(id) => console.log(`Eliminar usuario con ID ${id}`)}
      onCreate={() => console.log("Crear nuevo usuario")}
    />
  );
};

export default UsuariosTable;
