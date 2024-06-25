import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileAvatar = () => {
  // define the schema for posts
  // define the schema for users

  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
