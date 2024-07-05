import { Tag } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";
interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const {id, title, content, tag } = post;

  return (
    <div className="card bg-base-100 w-full border shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-accent badge-outline">{tag.name}</div>
          <Link href={`/blog/${id}`} className="hover:underline">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
