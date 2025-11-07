"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/blog', label: 'Blog' }
    ];
    const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <nav>
      <ul>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} className={`${isActive(link.href) ? 'text-red-500' : ''}`}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar