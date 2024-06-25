import Bounded from "@/components/Bounded";
import prisma from "@/prisma/db";
import React from "react";

const page = async () => {
  const users = await prisma.user.findMany();
  return (
    <Bounded>
      <h1>Climate Commons</h1>
    </Bounded>
  );
};

export default page;
