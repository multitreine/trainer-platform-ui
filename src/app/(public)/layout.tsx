import { Header } from "@/components/Header";
import { AppWrapper } from "../AppWrapper";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <AppWrapper>{children}</AppWrapper>
    </>
  );
}
