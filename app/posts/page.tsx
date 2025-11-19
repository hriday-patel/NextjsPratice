import { Suspense } from "react";
import Author from "./Author";
import Spinner from "./Spinner";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const page = async () => {
  await new Promise((res) => setTimeout(res, 5000));
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await fetchData.json();
  const posts = data.filter((post: Post) => post.id % 10 === 1);
  return (
    <div>
      <ul className="divide-y-2 w-1/2 mx-auto flex flex-col gap-3">
        {posts.map((post: Post) => (
          <li
            key={post.id}
            className="p-4 flex flex-col gap-3 border rounded-lg shadow-md"
          >
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold">{post.title.toUpperCase()}</h1>
              <p className="tracking-wide">{post.body}</p>
            </div>
            <Suspense fallback={<Spinner />}>
              <Author userId={post.userId} />
            </Suspense>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default page;
