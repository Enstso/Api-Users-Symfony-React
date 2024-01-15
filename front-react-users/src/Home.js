import React from "react";
import Users from "./Users";

const Home = ({onButtonUpdateClick}) => {
  return (
    <div className="max-w-screen-md mx-auto bg-white p-8 rounded shadow-xl">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Firstname</th>
            <th className="py-2 px-4 border-b">Lastname</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Password</th>
            <th className="py-2 px-4 border-b">Update</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          <Users onButtonUpdateClick={onButtonUpdateClick}></Users>
        </tbody>
      </table>
      <div className="mt-4 ">
        <a href="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </a>
      </div>
    </div>
  );
};

export default Home;
