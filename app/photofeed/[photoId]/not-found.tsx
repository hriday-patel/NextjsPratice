"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathname = usePathname();
    const photoID = pathname.split("/")[2];
  return (
    <div>{photoID} is not available</div>
  )
}
export default NotFound