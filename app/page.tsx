import Post from "@/components/Post";
import SideBar from "@/components/SideBar";

async function getData() {
  const res = await import("../app/api/getposts/route");
  return await (await res.GET()).json();
}

export default async function Home() {
  const allposts = await getData();
  // console.log(allposts)
  return (
    <div>
      <SideBar />
      {allposts.map((post: any) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
