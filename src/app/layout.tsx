import "./globals.css";
import { Roboto } from "next/font/google";
import AOS from "aos";

import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rocketseat · Evolua rápido como a tecnologia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
