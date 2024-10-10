import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CoursesSection } from "@/components/CoursesSection";
import { TeachersSection } from "@/components/TeachersSection";
import { StructureSection } from "@/components/StructureSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

import { wrapperDataPage } from "./data";

interface HomePageProps {
  exemploData: any;
}

const CustomBackground = () => {
  return (
    <div className="background-container">
      <div className="green-stripe"></div>
      <div className="gray-stripe"></div>
    </div>
  );
};

const HomePage = ({ exemploData }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      <Header  />
      <main>
        <HeroSection />
        <CustomBackground/>
        <CoursesSection />
        <TeachersSection />
        <StructureSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default wrapperDataPage(HomePage);