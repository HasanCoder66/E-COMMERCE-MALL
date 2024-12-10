import { navLinks } from "@/lib/constant"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Topbar = () => {
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 shadow-xl bg-blue-2 ">
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
  )
}

export default Topbar