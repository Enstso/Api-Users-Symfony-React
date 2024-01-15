import ButtonSubmit from "./ButtonSubmit";
import React from "react";
const Form = ({method,traitement, action}) => {
    console.log(action);
    return (
      <form action={action} method={method} onSubmit={traitement}>
        <label htmlFor="firstname" className="block text-gray-700 text-sm font-bold mb-2">
          First Name
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="firstname"
          name="firstname"
        />
  
        <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">
          Last Name
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="lastname"
          name="lastname"
        />
  
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="email"
          name="email"
          type="email"
        />
  
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="password"
          name="password"
          type="password"
        />
  
        <ButtonSubmit />
      </form>
    );
  };
  
  export default Form;