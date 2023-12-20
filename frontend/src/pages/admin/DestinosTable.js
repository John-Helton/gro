import React from "react";
import ListTable from "./ListTable";

const DestinosTable = () => {
  // Lógica específica de DestinosTable

  const data = []; // Tu data específica

  return (
    <ListTable
      title="Lista de Destinos"
      data={data}
      onEdit={(id) => console.log(`Editar destino con ID ${id}`)}
      onDelete={(id) => console.log(`Eliminar destino con ID ${id}`)}
      onCreate={() => console.log("Crear nuevo destino")}
    />
  );
};

export default DestinosTable;
