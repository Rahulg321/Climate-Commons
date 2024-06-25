import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import ProfileAvatar from "./ProfileAvatar";

const ProfilePopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <ProfileAvatar />
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <div className="mb-2 flex items-center gap-4">
            <div className="">
              <ProfileAvatar />
            </div>
            <h5>Rahul Gupta</h5>
          </div>
          <Separator />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfilePopover;
