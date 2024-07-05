import PostCard from "@/components/PostCard";
import "./globals.css";
import { db } from "@/lib/db";

async function getPost(){
  const res = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    orderBy:{
      createAt: 'desc',
    }
  });
  return res;
}

export default async function Home() {

  const posts = await getPost();
  // console.log(posts);

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {posts.map(post=>(
        <PostCard key={post.id} post={post}/>
      ))}
    </main>
  );
}
