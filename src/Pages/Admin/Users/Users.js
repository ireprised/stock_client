import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState();
  const [role, setRole] = useState(false);

  useEffect(() => {
    fetch("https://young-tundra-08226.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [role]);

  const removeUser = (id) => {
    fetch(`https://young-tundra-08226.herokuapp.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Successfully removed item");
          const newUsers = users.filter((user) => user._id !== id);
          setUsers(newUsers);
        }
      });
  };

  const changeRole = (id) => {
    fetch(`https://young-tundra-08226.herokuapp.com/users/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setRole(!role);
        }
      });
  };
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?._id}>
              <td>1</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.password}</td>
              <td>{user?.role}</td>
              <td className=" d-flex justify-content-between">
                <Button
                  onClick={() => changeRole(user?._id)}
                  className="border-0"
                >
                  Change Role
                </Button>
                <Button
                  onClick={() => removeUser(user?._id)}
                  className="bg-secondary border-0"
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
