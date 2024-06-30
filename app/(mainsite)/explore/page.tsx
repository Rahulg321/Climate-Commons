import Bounded from "@/components/Bounded";
import CreatePostModal from "@/components/CreatePostModal";
import PostCard from "@/components/PostCard";
import prisma from "@/prisma/db";
import Link from "next/link";
import React from "react";

const page = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
    include: {
      author: {
        select: {
          username: true,
          profilePicture: true,
        },
      },
    },
  });

  const postCount = await prisma.post.count();

  return (
    <section className="px-4">
      <h2>Explore page</h2>
      <h2>{postCount} posts found</h2>

      <div className="blog-index">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/explore/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul> */}

      <CreatePostModal />
    </section>
  );
};

export default page;
