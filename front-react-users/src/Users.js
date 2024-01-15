import React, {useEffect, useState } from "react";
import UserDetail from "./UserDetail";

const Users = ({onButtonUpdateClick}) => {
  const [data, setUsers] = useState([]);
  useEffect(() => {
    console.log("sal");
    async function fetchData() {
      try {
        let req = await fetch("http://0.0.0.0:8084/api/users");
        let res = await req.json();
        setUsers(res.data);
      } catch (error) {}
    }
    fetchData();
  }, []);
  const users = data.map((user) => {
    return (
      <UserDetail
      key={user.id}
        id={user.id}
        firstname={user.firstname}
        lastname={user.lastname}
        email={user.email}
        password={user.password}
        onButtonUpdateClick={onButtonUpdateClick}
      ></UserDetail>
    );
  });
  return <>{users}</>;
}

export default Users;
