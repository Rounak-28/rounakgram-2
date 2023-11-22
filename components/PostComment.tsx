"use client";

const PostComment = () => {
  return (
    <div className="flex p-2 space-x-2">
      <input
        type="text"
        placeholder="Add a comment..."
        className="w-full h-14 bg-[#1e1e21] px-2 outline-none rounded"
      />
      <button className="bg-blue-400 hover:bg-blue-500 w-24 rounded">
        Post
      </button>
    </div>
  );
};

export default PostComment;
