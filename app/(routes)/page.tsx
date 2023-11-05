import Post from "@/components/Post";

async function getData() {
  const res = await import("../api/getposts/route");
  return await (await res.GET()).json();
}

export default async function Home() {
  const allposts = await getData();
  // console.log(allposts)
  return (
    <div>
      {allposts.map((post: any) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
