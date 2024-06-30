import { Montserrat, Syne } from "next/font/google";

export const work_sans = Syne({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
});

export const merriweather = Montserrat({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "700", "900"],
  fallback: ["system-ui", "arial"],
});
