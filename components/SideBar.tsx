"use client";

import { UserButton, useClerk, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

type NavComponentProps = {
  text: string;
  link: string;
};

const NavComponent = ({ text, link }: NavComponentProps) => {
  let segment: string | null = useSelectedLayoutSegment();
  segment = segment === null ? "/" : `/${segment}`;
  return (
    <Link
      href={link}
      className={`${
        segment === link && "bg-[#877eff]"
      } h-16 rounded-md my-1 flex justify-center items-center`}
    >
      <h1>{text}</h1>
    </Link>
  );
};

const SideBar = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  // console.log(user)
  return (
    <div className="w-56 bg-[#09090a] h-screen fixed top-0 left-0 px-4">
      <Link href="/">
        <img src="/logo-dark.svg" className="mt-8" alt="" />
      </Link>
      <div className="flex h-24 items-center space-x-2 my-8">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            baseTheme: dark,
            elements: {
              avatarBox: "rounded-full w-14 h-14",
            },
          }}
        />
        <span className="text-xl font-semibold">{user?.firstName}</span>
      </div>
      <div className="space-y-8">
        <NavComponent text="Home" link="/" />
        <NavComponent text="Create Post" link="/sharepost" />
      </div>
      <div className="w-full px-4 h-16 absolute bottom-5 left-0">
        <button
          className="flex w-full rounded-md  hover:bg-[#877eff] h-full items-center justify-center text-xl font-semibold"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
