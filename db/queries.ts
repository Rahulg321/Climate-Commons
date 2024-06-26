import prisma from "@/prisma/db";

const fetchAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

const fetchUserAndPosts = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      posts: true,
    },
  });
  return user;
};

const fetchPostsByUserId = async (userId: number) => {
  const posts = await prisma.post.findMany({
    where: {
      authorId: userId,
    },
  });
  return posts;
};

const fetchUnqiuePost = (slug: string) => {};

export {
  fetchAllPosts,
  fetchUnqiuePost,
  fetchUserAndPosts,
  fetchPostsByUserId,
};
