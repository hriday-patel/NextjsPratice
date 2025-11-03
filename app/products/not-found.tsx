"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathname = usePathname();
    const productId = pathname.split("/")[3];
  return (
    <div>not-found {productId}</div>
  )
}
export default NotFound