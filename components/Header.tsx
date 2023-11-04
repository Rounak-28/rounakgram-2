import { UserButton, currentUser } from "@clerk/nextjs";

const Header = async () => {
  // const user = await currentUser();
  // console.log(user);
  return (
    <div className="bg-gray-200 h-16 w-screen sticky top-0 flex items-center">
      <span className="px-4">rounakgram</span>
      <button className="bg-blue-500 h-10 px-1 rounded-md absolute right-24">
        create post
      </button>
      <div className="absolute right-4">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "rounded-full w-12 h-12 ",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Header;
