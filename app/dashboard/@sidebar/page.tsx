import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col">
        <Link href="/dashboard/1">Alert 1</Link>
        <Link href="/dashboard/2">Alert 2</Link>
        <Link href="/dashboard/3">Alert 3</Link>
    </div>
  )
}
export default page