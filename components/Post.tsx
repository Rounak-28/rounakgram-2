import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import PostLikes from "./PostLikes";

type UserLike = {
  id: number;
  userID: string;
  postID: number;
};

type PostProps = {
  id: number;
  caption: string;
  imageUrl: string;
  createdAt: Date;
  userName: string;
  userDP: string;
  userID: string;
  usersWhoLiked: UserLike[];
  currentUserID: string;
};

const Post = async ({
  id,
  caption,
  imageUrl,
  createdAt,
  userName,
  userDP,
  userID,
  usersWhoLiked,
  currentUserID,
}: PostProps) => {
  const time = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="w-[700px] min-h-[100px] border-[1px] border-[#ffffff41] mx-auto my-6 rounded-lg overflow-hidden px-3 pt-1 pb-3">
      <div className="top flex items-center space-x-3 h-16">
        <Link href={`/user/${userID}`}>
          <div className="dp bg-white w-12 h-12 rounded-full overflow-hidden">
            <Image src={userDP} alt="" height={100} width={100} />
          </div>
        </Link>
        <div className="flex flex-col">
          <Link href={`/user/${userID}`}>
            <span className="hover:underline font-semibold text-lg">
              {userName}
            </span>
          </Link>
          <span className="text-sm text-gray-400">{time}</span>
        </div>
      </div>
      <Link href={`/post/${id}`}>
        <div className="main space-y-2">
          <span>{caption}</span>
          <Image
            src={imageUrl}
            height={500}
            width={1000}
            className="rounded-md"
            alt=""
          />
        </div>
      </Link>
      <PostLikes
        currentUserID={currentUserID}
        postID={id}
        usersWhoLiked={usersWhoLiked}
      />
      <Link href={`/post/${id}`}>
        {/* try to add comment count here, like "view all 42 comments" */}
        <p className="text-gray-300 py-2 text-sm">View all comments</p>
      </Link>
    </div>
  );
};

export default Post;
