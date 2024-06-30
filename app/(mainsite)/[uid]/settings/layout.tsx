import Bounded from "@/components/Bounded";
import SettingsNav from "@/components/SettingsNav";
import React from "react";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="border-b-2">
        <Bounded className="" space="small" variant="wide">
          <h1>Settings</h1>
        </Bounded>
      </div>
      <div className="bg-card">
        <Bounded
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variant="wide"
        >
          <div className="col-span-1 bg-emerald-700">
            <SettingsNav />
          </div>
          {children}
        </Bounded>
      </div>
    </div>
  );
};

export default SettingsLayout;
