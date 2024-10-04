const heroData = {
  title: "Qualidade técnica e excelência em capacitação pública e privada.",
  ctaPrimary: {
    text: "SAIBA MAIS",
    url: "#saiba-mais",
  },
  ctaSecondary: {
    text: "▶",
    url: "#video",
  },
  image:
    "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?q=400&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
};

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {heroData.title}
        </h1>
        <Button
          variant="default"
          className="bg-green-600 hover:bg-green-700 text-white mr-4"
        >
          {heroData.ctaPrimary.text}
        </Button>
        <Button
          variant="outline"
          className="border-green-600 text-green-600"
        >
          {heroData.ctaSecondary.text}
        </Button>
      </div>
      <div className="md:w-1/2 relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-green-600">
          <Image
            src={heroData?.image}
            alt="Professional"
            layout="fill"
            objectFit="cover"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-green-600"
          />
        </div>
      </div>
    </section>
  );
}