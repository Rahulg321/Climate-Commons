import React from "react";
import NavIconTooltip from "./NavIconTooltip";
import {
  Compass,
  Globe,
  Home,
  Newspaper,
  ScrollText,
  UserRound,
  Wrench,
} from "lucide-react";
import ProfilePopover from "./ProfilePopover";
import { ModeToggle } from "./theme-button";

const MainSidebar = () => {
  return (
    <aside className="hidden h-full border-r-2 bg-popover px-4 py-6 text-primary md:block">
      <div className="sticky top-4">
        <div>CC</div>
        <div className="space-y-4">
          <NavIconTooltip icon={<Home />} href={"/home"} label="Home" />
          <NavIconTooltip icon={<Wrench />} href={"/tools"} label="Tools" />
          <NavIconTooltip icon={<Newspaper />} href={"/blogs"} label="Blogs" />
          <NavIconTooltip
            icon={<Compass />}
            href={"/explore"}
            label="Explore"
          />
          <NavIconTooltip
            icon={<Globe />}
            href={"/communities"}
            label="Communities"
          />
          <NavIconTooltip
            icon={<UserRound />}
            href={"/rg5353070"}
            label="Profile"
          />
        </div>
        <ModeToggle />
        <div>
          <ProfilePopover />
        </div>
      </div>
    </aside>
  );
};

export default MainSidebar;
