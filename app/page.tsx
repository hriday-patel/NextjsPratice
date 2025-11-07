import Link from "next/link";

const page = () => {
  return (
    <div>
      <>Welcome to the Home Page</>
      <br />
      <div> You can read about articles!</div>
      <div>
        <Link href="/article">Go to Article</Link>
      </div>
    </div>
  );
};
export default page;
