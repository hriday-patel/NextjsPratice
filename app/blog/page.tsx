import Link from "next/link";
const Page = () => {
  return (
    <div>
      <Link href="/blog/firstblog">First Blog</Link>
      <br />
      <Link href="/blog/secondblog">Second Blog</Link>
    </div>
  );
};
export default Page;
