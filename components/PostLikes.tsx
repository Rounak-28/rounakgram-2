"use client";

import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

type UserLike = {
  id: number;
  userID: string;
  postID: number;
};

type Props = {
  currentUserID: string;
  postID: number;
  usersWhoLiked: UserLike[];
};

const PostLikes = ({ currentUserID, postID, usersWhoLiked }: Props) => {
  const router = useRouter();

  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(
    usersWhoLiked.some((user) => user.userID === currentUserID)
  );
  const [likeCount, setLikeCount] = useState(usersWhoLiked.length);

  const handleLikeBtnPress = async () => {
    if (isLikedByCurrentUser) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLikedByCurrentUser(!isLikedByCurrentUser);

    const res = await fetch("/api/updatepostlikes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postID: postID,
        likeID: usersWhoLiked.find((user) => user.userID === currentUserID)?.id,
        isIncrement: !isLikedByCurrentUser,
      }),
    });

    // this thing does a whole page refresh but its making things work,
    // maybe try to remove later
    router.refresh(); // please dont remove this line 🙂
  };

  return (
    <div className="h-16 flex items-center px-3 space-x-4">
      <button onClick={handleLikeBtnPress}>
        {isLikedByCurrentUser ? (
          <div className="text-3xl text-red-600">
            <BsHeartFill />
          </div>
        ) : (
          <div className="text-3xl">
            <BsHeart />
          </div>
        )}
      </button>
      <span className="text-lg">{likeCount} Likes</span>
    </div>
  );
};

export default PostLikes;
