import Link from "next/link";
import React from "react";

const SettingsNav = () => {
  return (
    <div className="flex flex-col">
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
      <SettingsNavLink />
    </div>
  );
};

export default SettingsNav;

function SettingsNavLink() {
  return <Link href="/settings/profile">General</Link>;
}
