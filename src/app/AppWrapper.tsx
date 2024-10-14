
import "aos/dist/aos.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MultiTreine · Cursos.",
};

const AppWrapper = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <html lang="pt-br">
        <body className={`${roboto.className} bg-[#F3F4F6]`}>
          <>{children}</>
        </body>
      </html>
    </>
  );
};

export { AppWrapper };
