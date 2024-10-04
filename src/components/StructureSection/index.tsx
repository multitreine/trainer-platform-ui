const structureData = {
  title: "Nossa estrutura",
  description:
    "Contamos com uma infraestrutura moderna, equipada com a melhor tecnologia para oferecer um ambiente de aprendizado confortável e eficiente.",
  image:
    "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?q=400&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
  statistics: [
    {
      value: "46K",
      label: "Alunos formados",
    },
    {
      value: "167K",
      label: "Horas de aula",
    },
    {
      value: "87+",
      label: "Professores",
    },
  ],
  ctaText: "Saiba Mais",
  ctaUrl: "#estrutura",
};

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function StructureSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={structureData.image}
            alt="Estrutura"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">{structureData.title}</h2>
          <p className="text-gray-600 mb-8">{structureData.description}</p>
          <div className="grid grid-cols-3 gap-4">
            {structureData.statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 text-white p-4 rounded-lg"
              >
                <span className="text-2xl font-bold">{stat.value}</span>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <Button
            variant="default"
            className="bg-green-600 hover:bg-green-700 text-white mt-8"
            ref={structureData.ctaUrl}
          >
            {structureData.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}