import Post from "@/components/Post";
import { currentUser } from "@clerk/nextjs";

export const revalidate = 0;

async function getData() {
  const res = await import("../api/getposts/route");
  return await (await res.GET()).json();
}

export default async function Home() {
  const allposts = await getData();
  const user = await currentUser();

  return (
    <div>
      {allposts.map((post: any) => (
        <Post key={post.id} {...post} currentUserID={user?.id} />
      ))}
    </div>
  );
}
