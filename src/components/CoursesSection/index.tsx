const coursesData = {
  title: "Cursos de capacitação e aperfeiçoamento",
  courses: [
    {
      title: "Curso 01 - Formação em Liderança",
      description:
        "Desenvolva suas habilidades de liderança com os melhores profissionais do mercado.",
      image: "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?q=400&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      ctaText: "Saiba Mais",
      ctaUrl: "#curso01",
    },
    {
      title: "Curso 02 - Excelência em Gestão",
      description:
        "Aprenda a gerenciar equipes e projetos com eficiência e inovação.",
      image: "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?q=400&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      ctaText: "Saiba Mais",
      ctaUrl: "#curso02",
    },
    {
      title: "Curso 03 - Estratégias de Marketing Digital",
      description:
        "Domine as principais técnicas para promover sua marca no ambiente digital.",
      image: "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?q=400&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      ctaText: "Saiba Mais",
      ctaUrl: "#curso03",
    },
  ],
};

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CoursesSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{coursesData.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  href={course.ctaUrl}
                >
                  {course.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}