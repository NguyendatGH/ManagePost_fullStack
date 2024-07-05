import BackButton from "@/components/backButton";
import ButtonAction from "@/components/ButtonAction";
import { db } from "@/lib/db";
import React, { FC } from "react";

interface BlogDetailPageProps{
  params: {
    id: string
  }
}

async function getPost(id: string){
  const response = await db.post.findFirst({
    where:{
      id: id
    },
    select:{
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return response;
}

const BlogDetailPage:FC<BlogDetailPageProps> = async ({params}) => {

  const post = await getPost(params.id);

  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction id={params.id}/>
      </div>
      <div className="badge badge-accent badge-outline">{post?.tag.name}</div>
      <p className="text-slate-700">{post?.content}</p>
    </div>
  );
};

export default BlogDetailPage;
