import { formatDistance } from "date-fns";
import Image from "next/image";

type PostProps = {
  caption: string;
  imageUrl: string;
  createdAt: Date;
  userName: string;
  userDP: string;
};

const Post = ({ caption, imageUrl, createdAt, userName, userDP }: PostProps) => {
  const time = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="w-96 min-h-[100px] border-[1px] border-[#ffffff41] mx-auto my-4 rounded-lg overflow-hidden">
      <div className="top flex items-center space-x-3 mx-1 h-16">
        <div className="dp bg-white w-12 h-12 rounded-full overflow-hidden">
          <Image src={userDP} alt="" height={100} width={100}/>
        </div>
        <div className="flex flex-col">
          <span>{userName}</span>
          <span className="text-sm">{time}</span>
        </div>
      </div>
      <div className="main">
        <span className="mx-1">{caption}</span>
        <Image src={imageUrl} alt="" height={500} width={1000}/>
      </div>
    </div>
  );
};

export default Post;
