import React from "react";

const ButtonDelete = ({id}) => {
    async function  handleClick(){
        const req = await fetch(`http://0.0.0.0:8084/api/delete/user/${id}`,{
            method:"DELETE"
        });
        location.assign("/");
    } 
    return(<td><button onClick={handleClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-300 rounded">Delete</button></td>)}

export default ButtonDelete;