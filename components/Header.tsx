const Header = () => {
  return (
    <div className="bg-gray-200 h-16 w-screen sticky top-0 flex items-center">
      <span className="px-4">rounakgram</span>
      <button className="bg-blue-500 h-10 px-1 rounded-md absolute right-24">
        create post
      </button>
      <div className="dp w-12 h-12 bg-red-600 rounded-full absolute right-4 cursor-pointer"></div>
    </div>
  );
};

export default Header;
