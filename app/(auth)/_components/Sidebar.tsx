"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AdminLinks } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
          <Link href="/" className="sidebar-logo">
            <Image src="/logo.svg" alt="" width={180} height={28} />
          </Link>

          <nav className="sidebar-nav">
            <ul className="sidebar-nav_elements">
              {AdminLinks.slice(0, 4).map((link) => {
                const isActive = link.url === pathname;

                return (
                  <li
                    key={link.url}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-white/5" : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.url}>
                      <link.icon />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {AdminLinks.slice(4).map((link) => {
                const isActive = link.url === pathname;

                return (
                  <li
                    key={link.url}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-purple-gradient" : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.url}>
                      <link.icon />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
