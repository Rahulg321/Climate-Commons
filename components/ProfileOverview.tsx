import React from "react";
import Bounded from "./Bounded";
import { User } from "@prisma/client";
import { Link2, MapPin, Pen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProfileOverview = ({ user }: { user: User }) => {
  return (
    <div className="px-2 py-2">
      <div className="flex flex-row-reverse items-center gap-2 md:flex-row">
        {user.profilePicture && (
          <Image
            src={user.profilePicture}
            alt=""
            width={100}
            height={50}
            className="rounded-full object-cover"
          />
        )}
        <div className="flex w-full flex-col items-center gap-2 md:flex-row md:justify-between">
          <div className="space-y-2">
            <h2>{user.username}</h2>
            <span className="block text-sm text-muted-foreground">
              {user.bio}
            </span>
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin />
                Ludhiana
              </span>
              <Link
                href="https://www.rahulguptadev.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverAccent flex items-center gap-1 text-sm text-muted-foreground"
              >
                <Link2 />
                www.rahulguptadev.in
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <Following />
            <Followers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;

function ProfileBio() {
  return <div></div>;
}

function Following() {
  return (
    <div className="flex flex-row items-center gap-1 text-sm md:flex-col">
      <span>23</span>
      <span className="text-muted-foreground">Following</span>
    </div>
  );
}

function Followers() {
  return (
    <div className="flex flex-row items-center gap-1 text-sm md:flex-col">
      <span>23</span>
      <span className="text-muted-foreground">Followers</span>
    </div>
  );
}
