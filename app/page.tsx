import Link from "next/link";

const page = () => {
  return (
    <div>
      <div>Which article do you want to read?</div>
      <Link href={`/article/police`}>Police</Link>
      <Link href={`/article/news`}>News</Link>
      <Link href={`/article/health`}>Health</Link>
    </div>
  );
};
export default page;
