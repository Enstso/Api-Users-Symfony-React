import React from "react";
import Form from "./Form";


const Create = ()=>{

     async function traitement(e){
        e.preventDefault();
        const req = await  fetch("http://0.0.0.0:8084/api/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({firstname:e.target[0].value,lastname:e.target[1].value,email:e.target[2].value,password:e.target[3].value})
         });
         location.assign("/");
    }
    return(<Form traitement={(e)=>traitement(e)} action={"http://0.0.0.0/api/create"} method={"POST"}></Form>);
}

export default Create;