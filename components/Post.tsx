import { formatDistance } from "date-fns";

type PostProps = {
  caption: string;
  imageUrl: string;
  createdAt: Date;
  userName: string;
};

const Post = ({ caption, imageUrl, createdAt, userName }: PostProps) => {
  const time = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });

  //////////// for now
  userName = userName || "sherlock holmes";

  return (
    <div className="w-96 min-h-[100px] border-[1px] border-[#ffffff41] mx-auto my-4 rounded-lg overflow-hidden">
      <div className="top flex items-center space-x-3 mx-1 h-16">
        <div className="dp bg-white w-12 h-12 rounded-full"></div>
        <div className="flex flex-col">
          <span>{userName}</span>
          <span className="text-sm">{time}</span>
        </div>
      </div>
      <div className="main">
        <span className="mx-1">{caption}</span>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Post;
