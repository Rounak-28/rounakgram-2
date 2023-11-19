"use client";

import { BsHeart, BsHeartFill } from "react-icons/bs";

type Props = {
  likeCount: number;
  isLikedByCurrentUser: boolean;
};

const PostLikes = ({ likeCount, isLikedByCurrentUser }: Props) => {
  return (
    <div className="h-16 flex items-center px-3 space-x-4">
      {isLikedByCurrentUser ? (
        <div className="text-3xl text-red-600">
          <BsHeartFill />
        </div>
      ) : (
        <div className="text-3xl">
          <BsHeart />
        </div>
      )}
      <span className="text-lg">{likeCount} Likes</span>
    </div>
  );
};

export default PostLikes;
