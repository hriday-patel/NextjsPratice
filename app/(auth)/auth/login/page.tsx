'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


const page = () => {
  const links = [
    { href: '/auth/register', label: 'Register' },
    { href: '/auth/login', label: 'Login' }
  ]
  const pathname = usePathname();
  console.log("Current pathname:", pathname);
  return (
    <div>
      {links.map((link) => (
        <div key={link.href}>
          <Link href={link.href} style={{ color: pathname === link.href ? 'red' : 'blue' }}>
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  )
}
export default page