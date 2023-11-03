import React from "react";

const Post = () => {
  return (
    <div className="w-96 min-h-[100px] border-2 border-red-600 mx-auto my-4 rounded-lg overflow-hidden">
      <div className="top flex items-center space-x-3 mx-1 h-16">
        <div className="dp bg-black w-12 h-12 rounded-full"></div>
        <div className="flex flex-col">
          <span>Rounak</span>
          <span className="text-sm">12 hours ago</span>
        </div>
      </div>
      <div className="main">
        <span className="mx-1">Lorem ipsum dolor saecati.</span>
        <img
          src="https://cdn.pixabay.com/photo/2023/10/27/23/10/mountain-8346389_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Post;
