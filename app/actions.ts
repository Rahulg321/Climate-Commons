"use server";

import prisma from "@/prisma/db";
import { revalidatePath } from "next/cache";

// cannot trust anything coming from the client
export const createPost = async (formData: FormData) => {
  // check authentication

  // validate using zod

  console.log("in create post");
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
    return { success: false, error: "Missing title or content" };
  }

  //   create a slug using the title
  const slug = title.toLowerCase().replace(/ /g, "-");

  console.log(title, content);
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        slug,
        authorId: 1,
        comments: {
          create: [],
        },
      },
    });

    revalidatePath("/explore");
    return { success: true, error: false, post: post };
  } catch (error) {
    console.log(error);
    return { success: false, error: error };
  }
};

export const deletePost = async (id: number) => {
  await prisma.post.delete({
    where: {
      id,
    },
  });
};

export const updatePost = async (
  id: number,
  title: string,
  content: string,
) => {
  // get the slug using the title
  const slug = title.toLowerCase().replace(/ /g, "-");

  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      slug,
      content,
    },
  });
};
