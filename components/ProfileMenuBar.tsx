import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export default function ProfileMenuBar() {
  return (
    <div className="menubar flex w-full flex-row overflow-x-auto border-b-2 border-t-2 bg-card p-4">
      <ProfileMenuBarItem menuLink="profile" menuText="Profile" />
      <ProfileMenuBarItem menuLink="settings" menuText="Settings" />
      <ProfileMenuBarItem menuLink="profile" menuText="Profile" />
      <ProfileMenuBarItem menuLink="settings" menuText="Settings" />
      <ProfileMenuBarItem menuLink="profile" menuText="Profile" />
      <ProfileMenuBarItem menuLink="settings" menuText="Settings" />
      <ProfileMenuBarItem menuLink="profile" menuText="Profile" />
      <ProfileMenuBarItem menuLink="settings" menuText="Settings" />
      <ProfileMenuBarItem menuLink="profile" menuText="Profile" />
      <ProfileMenuBarItem menuLink="settings" menuText="Settings" />
    </div>
  );
}

export function ProfileMenuBarItem({
  menuLink,
  menuText,
}: {
  menuText: string;
  menuLink: string;
}) {
  return (
    <Link href={menuLink} className="block rounded-md p-2 hover:bg-muted">
      {menuText}
    </Link>
  );
}
