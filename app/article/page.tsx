import Link from "next/link"

const page = () => {
  return (
    <div>
        <div>Which article do you want to read?</div>
        <div><Link href="/article/news-breaking">News-breaking</Link></div>
        <div><Link href="/article/police">Police</Link></div>
        <div><Link href="/article/politics">Politics</Link></div>
    </div>
  )
}
export default page