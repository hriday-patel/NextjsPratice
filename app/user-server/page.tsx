

import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const page = async () => {
  function getRandInt() {
    return Math.floor(Math.random() * 2);
  }
  await new Promise((res) => setTimeout(res, 2000));
  let data = [];
  try {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!fetchData.ok) {
      throw new Error("Network response was not ok");
    }
    data = await fetchData.json();
  } catch (error: any) {
    notFound();
  }

  if (getRandInt() === 0) {
    throw new Error("Random error occurred");
  }

  return (
    <div>
      <ul className="divide-y-2 ">
        {data.map((user: User) => (
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
