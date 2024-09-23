import { Roboto } from "next/font/google";
import { useState } from "react";
import { Section } from "../Section";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});


interface CourseProps {
  courses: Course[];
}

interface Course {
  id: string;
  images: {
    id: string;
    src: string;
    width: number;
    height: number;
    alt: string;
    imageSrc: string;
  };
  actions: {
    id: string;
    buttonText: string;
    buttonLink: string;
    buttonBgColor: string;
    buttonTextColor: string;
    buttonIcon: string;
  };
  countent: {
    id: string;
    title: string;
    description: string;
  };
  testimony: {
    id: string;
    text: string;
    authorName: string;
    authorHandle: string;
    authorImage: string;
  };
}

function Courses({ courses }: CourseProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  if (!courses || courses.length === 0) {
    return <></>;
  }

  useState(() => {
    if (courses.length > 0) {
      setActiveSection(courses[0]?.id);
    }
  });

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <section className="flex flex-col items-center h-full border-b border-b-[#29292e]">
      <div className=" h-full text-white">
        <div className="flex flex-col items-center justify-center ">
          <span className=" h-[5rem] rotate-180 bg-gradient-to-t  mb-[3.75rem] from-purple-500 to-transparent "></span>
          <h3
            data-aos="fade-up"
            className="font-bold text-[#e1e1e6] aos-init aos-animate text-[48px] mb-20 text-center   leading-[54px]"
          >
            Somos uma plataforma completa de <br /> aprendizado contínuo em
            programação
          </h3>
        </div>
      </div>
      <div className="">
        <div className={`${roboto.className} flex flex-col min-h-[660px] mx-6`}>
          <div className="flex relative text-white flex-row gap-7 border-b min-h-[68px] h-full border-[#29292e]">
            {courses.map(({ images }) => (
              <button
                key={images.id}
                className={`p-4 ${
                  activeSection === images.id
                    ? "border-b-4 border-[#04d361]"
                    : "brightness-75"
                }`}
                onClick={() => handleSectionClick(images.id)}
              >
                <img
                  src={images.src}
                  width={images.width}
                  height={images.height}
                  alt={images.alt}
                />
              </button>
            ))}
          </div>

          <div className="">
            {courses.map(
              ({ actions, countent, images, testimony }) =>
                activeSection === actions.id && (
                  <Section
                    key={actions.id}
                    buttonText={actions.buttonText}
                    buttonLink={actions.buttonLink}
                    buttonBgColor={actions.buttonBgColor}
                    buttonTextColor={actions.buttonTextColor}
                    buttonIcon={actions.buttonIcon}
                    imageSrc={images.imageSrc}
                    isActive={activeSection === images.id}
                    testimony={testimony}
                  >
                    <h4 className="font-bold text-[32px] pt-10 leading-9 mb-6">
                      {countent.title}
                    </h4>
                    <p className="text-[#E1E1E6] text-[16px] leading-[26px]">
                      {countent.description}
                    </p>
                  </Section>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Courses };