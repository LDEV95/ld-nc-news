// UserSelection.jsx
/*
import { useState, useEffect } from "react";
import * as api from "../../api";

export default function UserSelection({ onSelectUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <select onChange={(e) => onSelectUser(e.target.value)}>
      <option value="">Select a user</option>
      {users.map((user) => (
        <option key={user.username} value={user.username}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
*/
