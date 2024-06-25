import { Nunito, PT_Sans, Raleway, Libre_Baskerville } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "arial"],
});

export const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

export const pt_sans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-pt-sans",
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});
