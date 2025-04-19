"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "data overview", path: "/" },
  { name: "workshop", path: "/workshop" },
  { name: "pipeline", path: "/pipeline" },
  { name: "location", path: "/location" },
  { name: "settings", path: "/settings" },
];

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          href={path}
          className={`${
            path === pathname && "text-foreground font-semibold"
          } hover:text-foreground capitalize transition-all`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
