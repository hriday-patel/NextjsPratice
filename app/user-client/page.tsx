"use client";
import { div } from "framer-motion/client";
import { useState } from "react";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};
const page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error: any) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  fetchUsers();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ul className="divide-y-2 ">
        {users.map((user) => (
          <li key={user.id} className="">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default page;
