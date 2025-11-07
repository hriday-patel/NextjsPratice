import Link from "next/link"

const page = () => {
  return (
    <div>First page
      <br />
      <Link href="/blog/firstblog/insideFirstBlog" replace>Inside First Blog</Link>
    </div>
  )
}
export default page