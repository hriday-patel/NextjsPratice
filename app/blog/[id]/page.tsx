import { a } from "framer-motion/client";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Albums = {
  userId: number;
  id: number;
  title: string;
};

const page = async ({ params }: Params) => {
  const id = (await params).id;
  const fetchPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  const fetchAlbums = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );

  const [post, albums]: [Posts[], Albums[]] = await Promise.all([
    new Promise((res) => setTimeout(res, 5000)).then(() => fetchPosts.json()),
    new Promise((res) => setTimeout(res, 5000)).then(() => fetchAlbums.json()),
  ]);

  return (
    <div>
      <div className="grid grid-cols-2 p-2 gap-x-3">
        <div className="flex flex-col gap-3 col-span-1">
          {post.map((item: Posts) => (
            <div key={item.id} className="border p-2 rounded-lg shadow-md">
              <h1 className="font-bold text-lg">{item.title}</h1>
              <p className="tracking-wide">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 col-span-1">
          {albums.map((album: Albums) => (
            <div key={album.id} className="border p-2 rounded-lg shadow-md">
              <h1 className="font-bold text-lg">{album.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default page;
