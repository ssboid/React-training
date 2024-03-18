import React from "react";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const user = [
    {
      username: "joe",
      email: "joe@email.com",
      age: 20,
      city: "london",
    },
    {
      username: "fjoe",
      email: "joe@email.com",
      age: 20,
      city: "london",
    },
    {
      username: "rjoe",
      email: "joe@email.com",
      age: 20,
      city: "london",
    },
    {
      username: "ejoe",
      email: "joe@email.com",
      age: 20,
      city: "london",
    },
  ];
  return (
    <div>
      <h3 class="text">User Management</h3>
      <Link to="/user-management/add">Add User</Link>
      <table>
        <tr>
          <th class="tabletext">User</th>
          <th class="tabletext">Email</th>
          <th class="tabletext">Age</th>
          <th class="tabletext">Contact</th>
        </tr>
        {user.map((row) => {
          return (
            <tr>
              <td class="tabletext">{row.username}</td>
              <td class="tabletext">{row.email}</td>
              <td class="tabletext">{row.age}</td>
              <td class="tabletext">{row.city}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UserManagement;
