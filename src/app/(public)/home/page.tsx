
import { CoursesSection } from "@/components/Courses";
import { StructureSection } from "@/components/Structure";
import { Footer } from "@/components/Footer";

import { TeachersSection } from "@/components/Teachers";
import { wrapperDataPage } from "./data";
import { HeroSection } from "@/components/Hero";

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
      <>
        <HeroSection />
        <CustomBackground />
        <CoursesSection />
        <TeachersSection />
        <StructureSection />
      </>
      <Footer />
    </div>
  );
};

export default wrapperDataPage(HomePage);