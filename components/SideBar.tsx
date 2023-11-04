import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

type NavComponentProps = {
  text: string;
  link: string;
};

const NavComponent = ({ text, link }: NavComponentProps) => {
  return (
    <Link
      href={link}
      className="bg-gray-400 h-12 my-1 flex justify-center items-center"
    >
      <h1>{text}</h1>
    </Link>
  );
};

const SideBar = () => {
  return (
    <div className="w-48 bg-slate-100 h-screen fixed top-0 left-0">
      <div className="flex bg-red-200 items-center space-x-2">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "rounded-full w-12 h-12 ",
            },
          }}
        />
        <span className="text-lg font-semibold">rounak</span>
      </div>
      <NavComponent text="Home" link="/" />
      <NavComponent text="Create Post" link="/sharepost" />
    </div>
  );
};

export default SideBar;
