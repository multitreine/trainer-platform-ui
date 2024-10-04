const newsletterData = {
  title: "Receba nossas novidades",
  description:
    "Cadastre-se em nossa newsletter e fique por dentro dos próximos cursos, ofertas e eventos.",
  ctaText: "Inscrever",
};

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  return (
    <section className="bg-green-600 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              {newsletterData.title}
            </h2>
            <p className="text-white">{newsletterData.description}</p>
          </div>
          <div className="flex w-full md:w-auto">
            <Input
              type="email"
              placeholder="Adicione seu e-mail"
              className="rounded-r-none"
            />
            <Button
              variant="default"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-l-none"
            >
              {newsletterData.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}