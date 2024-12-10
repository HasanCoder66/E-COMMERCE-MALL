"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constant";


const Topbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathName = usePathname()
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 shadow-xl bg-blue-2 lg:hidden">
      <Image src={"/logo.png"} alt="Logo" width={150} height={70} />

      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${pathName === link.url ? "text-blue-1": "text-grey-1"}`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="relative flex items-center gap-4">
        <Menu onClick={() => setDropdownMenu(!dropdownMenu)} className="cursor-pointer md:hidden" />
          {dropdownMenu && (
            <div className=" absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className="flex gap-4 text-body-medium"
              >
                {" "}
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
          )}
        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
