import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("user delete successfully");
        }
      });
  };
  return (
    <div>
      <h1>All Users hare: {users.length} </h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}: {user._id}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
