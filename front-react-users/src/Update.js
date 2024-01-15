import React, { useEffect, useState } from "react";
import Form from "./Form";

const Update = ({ id }) => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`http://0.0.0.0:8084/api/user/${id}`);
        const res = await req.json();
        console.log(res);
        setUser(res.data);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    if (isLoading) {
      document.getElementById("firstname").value = user.firstname || "";
      document.getElementById("lastname").value = user.lastname || "";
      document.getElementById("email").value = user.email || "";
      document.getElementById("password").value = user.password || "";
    }
  }, [isLoading, user]);

  const traitement = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch(`http://0.0.0.0:8084/api/update/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: e.target[0].value,
          lastname: e.target[1].value,
          email: e.target[2].value,
          password: e.target[3].value,
        }),
      });
      location.assign("/");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      {user.id && (
        <Form
          traitement={(e) => traitement(e)}
          action={`http://0.0.0.0/api/update/${user.id}`}
          method={"PUT"}
        />
      )}
    </>
  );
};

export default Update;
