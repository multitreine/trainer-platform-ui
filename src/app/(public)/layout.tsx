import { Header } from "@/components/Header";
import { AppWrapper } from "../AppWrapper";
import { Footer } from "@/components/Footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <AppWrapper>{children}</AppWrapper>
      <Footer />
    </>
  );
}
