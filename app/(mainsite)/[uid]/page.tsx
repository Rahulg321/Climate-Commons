import Bounded from "@/components/Bounded";
import ProfileMenuBar from "@/components/ProfileMenuBar";
import prisma from "@/prisma/db";
import React from "react";

const page = async ({ params }: { params: { uid: string } }) => {
  const profileUser = await prisma.user.findUnique({
    where: { username: params.uid },
  });

  if (!profileUser) {
    return (
      <Bounded>
        <h1>User not found</h1>
      </Bounded>
    );
  }

  return (
    <section className="">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
        dolorem laboriosam nulla, repellat, dolores, fugit quas nisi autem
        mollitia laborum ab sed. Delectus, nemo reprehenderit fugit soluta
        voluptatibus omnis ipsam.
      </p>
    </section>
  );
};

export default page;
