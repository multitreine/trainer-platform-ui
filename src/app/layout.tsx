import "./globals.css";
import { Roboto } from "next/font/google";
import AOS from "aos";

import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Providers from "@/store/provider";
import { makeStore } from "@/store/createStore";

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
  const store = makeStore;
  const preloadedState = store.getState();

  return (
    <html lang="pt-br">
      <body className={`${roboto.className}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__PRELOADED_STATE__ = ${JSON.stringify(
                preloadedState
              ).replace(/</g, "\\x3c")}`,
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
