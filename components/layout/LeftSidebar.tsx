import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

// import { navLinks } from "../../lib/constant";
import { navLinks } from "@/lib/constant";

const LeftSidebar = () => {
  console.log(navLinks);
  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col bg-blue-2 shadow-xl gap-16 max-lg:hidden">
      <Image src={"/logo.png"} alt="Logo" width={150} height={70} />

      <div className="flex flex-col gap-12">
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

      <div className="flex items-center gap-4 text-body-medium">
        <UserButton />
        <p>Edit Profile</p>
      </div>


    </div>
  );
};

export default LeftSidebar;
