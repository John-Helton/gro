import React from "react";

const ListTable = ({ title, data, onEdit, onDelete, onCreate }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">{title}</h2>
      <table className="table">
        {/* Renderiza tus filas de tabla aquí usando el contenido de `data` */}
      </table>
      <div className="text-center">
        <button className="btn btn-primary" onClick={onCreate}>
          Crear
        </button>
      </div>
    </div>
  );
};

export default ListTable;
