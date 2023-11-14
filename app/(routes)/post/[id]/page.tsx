import Image from "next/image";
import Link from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";
import { headers } from "next/headers";

async function getData(id: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocal}://${host}/api/getsinglepost/${id}`);
  return response.json();
}

const Page = async ({ params }: { params: { id: string } }) => {
  const postData = await getData(params.id);
  console.log(postData);
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
          <Image src={postData.imageUrl} width={600} height={1000} alt="" className="px-4" />

          </div>
          <div className="img h-full w-[40%] bg-[#09090a]">hah</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
