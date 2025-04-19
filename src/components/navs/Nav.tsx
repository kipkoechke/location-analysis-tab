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
      {links.map(({ name, path }) => {
        const isActive = path === pathname;

        return (
          <Link
            key={name}
            href={path}
            className={`capitalize transition-all ${
              isActive ? "text-primary font-bold" : "text-tertiary"
            }`}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
