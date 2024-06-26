import prisma from "@/prisma/db";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  });

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      Viewing a single post
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default page;
