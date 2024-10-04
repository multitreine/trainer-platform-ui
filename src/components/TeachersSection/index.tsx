const teachersData = {
  title: "Conheça nossos professores",
  teachers: [
    {
      name: "Dr. João Silva",
      bio: "Especialista em liderança e gestão empresarial, com mais de 20 anos de experiência.",
      image:
        "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?q=400&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Profa. Maria Andrade",
      bio: "Referência em marketing digital e estratégias de comunicação.",
      image:
        "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?q=400&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Dr. Carlos Pereira",
      bio: "Pioneiro em inovação e tecnologia aplicada a negócios.",
      image:
        "https://images.unsplash.com/photo-1601054704854-1a2e79dda4d3?q=400&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ],
};

import Image from "next/image";

export function TeachersSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{teachersData.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {teachersData.teachers.map((teacher, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-gray-900 rounded-full p-4"
            >
              <div className="text-white">
                <h3 className="font-bold">{teacher.name}</h3>
                <p className="text-sm text-gray-400">{teacher.bio}</p>
              </div>

              <div className=" rounded-full overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={400}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
