"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminLinks } from "@/constants";
import Logo from "@/components/shared/Logo";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
          <Link href="/" className="sidebar-logo">
            <Logo width={155} height={53} />
          </Link>

          <nav className="sidebar-nav">
            <ul className="sidebar-nav_elements">
              {AdminLinks.slice(0, 7).map((link) => {
                const isActive = link.url === pathname;

                return (
                  <li
                    key={link.url}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-white/5" : "text-muted-foreground"
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
              {AdminLinks.slice(7).map((link) => {
                const isActive = link.url === pathname;

                return (
                  <li
                    key={link.url}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-purple-gradient" : "text-muted-foreground"
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
