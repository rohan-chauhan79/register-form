import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 underline">Registered Users Details</h2>
      <ul className="bg-white p-4 rounded shadow ">
        {users.map((user, index) => (
          <li key={index} className="border-b p-2">{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}
