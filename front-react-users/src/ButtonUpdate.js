import React from "react";
import { Link } from "react-router-dom";
const ButtonUpdate = ({ id, onButtonUpdateClick }) => {
  const url = `http://localhost:3002/update/${id}`
  return (
    <td>
      <Link to={url}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-300 rounded"
        onClick={()=>onButtonUpdateClick(id)}
      >
        Update
      </Link>
    </td>
  );
};

export default ButtonUpdate;
