import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home } from "lucide-react";
import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  href: string;
  label: string;
  className?: string;
};

const NavIconTooltip = ({ icon, href, label, className }: Props) => {
  return (
    <TooltipProvider>
      <Link href={href} className="block">
        <Tooltip>
          <TooltipTrigger>{icon}</TooltipTrigger>
          <TooltipContent side="right" align="center">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </Link>
    </TooltipProvider>
  );
};

export default NavIconTooltip;
