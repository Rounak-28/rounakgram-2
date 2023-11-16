import Image from "next/image";
import Link from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";
import { headers } from "next/headers";
import { formatDistance } from "date-fns";

async function getData(id: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocal}://${host}/api/getsinglepost/${id}`);
  return response.json();
}

const Page = async ({ params }: { params: { id: string } }) => {
  const postData = await getData(params.id);
  // console.log(postData);

  const time = formatDistance(new Date(postData.createdAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-2/3 h-[90%]">
        <div className="back h-[15%] flex items-center px-2  text-4xl text-violet-700">
          <Link href="/">
            <div className="px-1 flex items-center space-x-4">
              <TiArrowBackOutline />
              <span className="text-xl text-white">Back</span>
            </div>
          </Link>
        </div>
        <div className="main w-full flex h-[85%] border-2 ">
          <div className="img h-full flex items-center w-[60%] ">
            <Image
              src={postData.imageUrl}
              width={600}
              height={1000}
              alt=""
              className="px-4"
            />
          </div>
          <div className="h-full w-[40%] bg-[#09090a] px-4 divide-y-[1px] divide-gray-600">
            <div className="w-full h-32 flex items-center space-x-2">
              <div className="dp">
                <Image
                  src={postData.userDP}
                  alt=""
                  width={55}
                  height={55}
                  className="rounded-full"
                />
              </div>
              <div className="name">
                <p className="text-xl font-bold">{postData.userName}</p>
                <p className="text-sm text-gray-300">{time}</p>
              </div>
            </div>
            {/* <hr className="" /> */}
            <div className="caption py-4">
              <p>{postData.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
