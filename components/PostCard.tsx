import { Post } from "@prisma/client";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRandomIntInclusive } from "@/prisma/seed";
import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import PostCardAvatar from "./PostCardAvatar";
import Link from "next/link";

type Props = {
  post: {
    author: {
      username: string;
      profilePicture: string | null;
    };
  } & {
    id: number;
    title: string;
    slug: string;
    content: string | null;
    authorId: number;
    featuredImage: string | null;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

// generate a list of random image urls
// const images = [
//   "https://images.unsplash.com/photo-1718062457138-2d6fcab216d9?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1718809070510-371f29994edd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1719145177916-1b19e965af72?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1719306061122-23537e67f83e?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1719268921704-202ac52a5308?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_vector-1715786847762-e4f0299602bf?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1718784562407-3f7b1b88e08b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1719134052070-66ea8d0acb26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

const PostCard = ({ post }: Props) => {
  return (
    <Card className="rounded-xl border-2">
      <CardHeader className="relative">
        <PostCardAvatar avatarImg={post.author.profilePicture} />
        <Link
          href={`/${post.author.username}`}
          className="text-sm text-muted-foreground hover:underline"
        >
          {post.author.username}
        </Link>
        <CardTitle className="">{post.title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">{post.title}</p>
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt=""
            className="rounded-xl object-cover"
          />
        )}
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between">
          <MessageCircle className="size-5 text-muted-foreground" />
          <Repeat2 className="size-5 text-muted-foreground" />
          <Heart className="size-5 text-muted-foreground" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
