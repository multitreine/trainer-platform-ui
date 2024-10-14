import "./globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Roboto } from "next/font/google";

import { AppWrapper } from "./AppWrapper";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-[#F3F4F6]`}>
        <AppWrapper >
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}