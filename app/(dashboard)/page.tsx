import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-black">
      <UserButton/>
    </div>
  );
}
