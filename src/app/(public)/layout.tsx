import { Header } from "@/components/Header";

export const metadata = {
  title: "Rocketseat · Evolua rápido como a tecnologia.",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
      
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
