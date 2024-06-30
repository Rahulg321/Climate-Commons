import Bounded from "@/components/Bounded";
import ProfileMenuBar from "@/components/ProfileMenuBar";
import ProfileOverview from "@/components/ProfileOverview";
import prisma from "@/prisma/db";
import { redirect } from "next/navigation";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { uid: string };
}) => {
  const profileUser = await prisma.user.findUnique({
    where: { username: params.uid },
  });

  if (!profileUser) {
    console.log("you are not logged in cannot access this pages");
    redirect("/home");
  }

  return (
    <div className="">
      <ProfileOverview user={profileUser} />
      <div className="sticky top-0">
        <ProfileMenuBar />
      </div>

      {children}
    </div>
  );
};

export default layout;
