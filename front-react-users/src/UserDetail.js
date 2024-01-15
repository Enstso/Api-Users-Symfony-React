import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonUpdate from "./ButtonUpdate";

const UserDetail = ({id,firstname,lastname,email,password, onButtonUpdateClick}) => {
    return( <tr className="hover:bg-gray-50 ">
        <td className="py-2 px-4 border-b">{firstname}</td>
        <td className="py-2 px-4 border-b">{lastname}</td>
        <td className="py-2 px-4 border-b">{email}</td>
        <td className="py-2 px-4 border-b">{password}</td>
        <ButtonUpdate id={id} onButtonUpdateClick={onButtonUpdateClick} ></ButtonUpdate>
        <ButtonDelete id={id} ></ButtonDelete>
    </tr> );
}



export default UserDetail;