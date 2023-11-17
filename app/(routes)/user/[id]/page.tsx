import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

async function getData(id: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocal}://${host}/api/getuserdata/${id}`);
  return response.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const userData = await getData(params.id);
  // console.log(userData)

  return (
    <div className="w-screen h-screen pl-64 pt-16">
      <div>
        <div className="h-44 flex items-center px-4 space-x-5">
          <Image
            src={userData[0]?.userDP}
            width={100}
            height={100}
            className="rounded-full"
            alt=""
          />
          <div>
            <p className="text-3xl font-bold">{userData[0]?.userName}</p>
            <p className="text-lg text-gray-400">
              @{userData[0]?.userName?.split(" ")[0].toLowerCase()}
            </p>
            <p className="pt-5 text-xl">
              <span className="text-purple-400 font-semibold">
                {userData?.length}
              </span>{" "}
              Posts
            </p>
          </div>
        </div>
        <div className="posts grid grid-cols-2 gap-10">
          {userData.map((data: any) => (
            <div className="w-[500px]" key={data?.id}>
              <Link href={`/post/${data?.id}`}>
                <Image src={data?.imageUrl} width={1000} height={700} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
