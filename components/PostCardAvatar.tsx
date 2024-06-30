import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PostCardAvatar = ({ avatarImg }: { avatarImg: string | null }) => {
  return (
    <Avatar className="size-6">
      {avatarImg ? (
        <AvatarImage src={avatarImg} />
      ) : (
        <AvatarFallback>CN</AvatarFallback>
      )}
    </Avatar>
  );
};

export default PostCardAvatar;
