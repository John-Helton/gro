import React from "react";
import ListTable from "./ListTable";

const ToursTable = () => {
  // Lógica específica de ToursTable

  const data = []; // Tu data específica

  return (
    <ListTable
      title="Lista de Tours"
      data={data}
      onEdit={(id) => console.log(`Editar tour con ID ${id}`)}
      onDelete={(id) => console.log(`Eliminar tour con ID ${id}`)}
      onCreate={() => console.log("Crear nuevo tour")}
    />
  );
};

export default ToursTable;
