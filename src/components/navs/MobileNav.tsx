"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const links = [
  { name: "Data Overview", path: "/" },
  { name: "Workshop", path: "/workshop" },
  { name: "Pipeline", path: "/pipeline" },
  { name: "Location", path: "/location" },
  { name: "Settings", path: "/settings" },
];

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Trigger Button */}
      <button className="p-2 z-50 relative" onClick={() => setIsOpen(true)}>
        <CiMenuFries className="text-accent text-[32px]" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Right Drawer Modal */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-xs bg-secondary shadow-xl p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsOpen(false)}>
            <IoClose className="text-2xl text-primary" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg capitalize font-medium transition-all ${
                pathname === link.path
                  ? "text-primary border-r-4 border-accent pr-2"
                  : "text-tertiary hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
