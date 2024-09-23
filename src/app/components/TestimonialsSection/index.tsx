import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    message: `&quot;Fiz muitas conexões que me levaram a hoje me
               redescobrir dentro da tecnologia e atuar com
               algumas stacks que além de estar em alta no
               mercado fazem o meu dia ficar mais feliz. Sou
               eternamente grato a Rocketseat assim como sou
               um eterno aluno do inicio ao fim!&quot;`,
    name: "Henrique Weiand",
    role: "Remote TechLead/Developer",
    image: "/henrique-weiand.webp",
  },
  {
    id: 2,
    message: `&quot;O apoio da comunidade, e a estrutura do curso foram
               fundamentais para o meu crescimento e entender como
               aquelas linhas de código faziam sentido completo! No
               backend, frontend e mobile, é indescritível poder
               criar seu produto! Obrigada Rocketseat, U Rock&quot;`,
    name: "Paloma Andrade de Oliveira",
    role: "Engenheira de Software | Sauce Labs",
    image: "/paloma-andrade.webp",
  },
  {
    id: 3,
    message: `&quot;Hoje faço trabalhos para clientes até fora do Brasil,
               e isso em 11 meses que comecei a aprender com a
               Rocketseat. Tenho orgulho de dizer que recebo no
               mínimo 3 contatos para entrevistas pelo LinkedIn por semana,
               e sou um profissional procurado.&quot;`,
    name: "Anderson Alves",
    role: "Fundador e Negócios na Yoopih",
    image: "/anderson-alves.png",
  },
  {
    id: 4,
    message: `&quot;Aprendi muito e de maneira bem rápida, consegui um
               novo emprego em uma empresa incrível e trabalho com o
               que eu amo nas tecnologias que eu mais gosto no momento.
               Só tenho a agradecer a toda a equipe por tornar isso possível!&quot;`,
    name: "Melissa Fernandes Novais",
    role: "Desenvolvedora Front-end",
    image: "/melissa-fernandes.webp",
  },
  {
    id: 5,
    message: `&quot;A Rocketseat me ajudou a mudar minha carreira e hoje atuo como desenvolvedor em uma empresa internacional. Sou muito grato a todo o conhecimento e suporte da comunidade!&quot;`,
    name: "João Pedro Almeida",
    role: "Desenvolvedor Full Stack",
    image: "/joao-pedro.webp",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="mt-44 flex items-center justify-center border-b border-b-[#29292e] px-4">
      <div className="w-[1120px] text-[#e1e1e6]">
        <div className="font-bold leading-[54px] text-5xl w-full mb-10">
          <h3 data-aos="fade-up" className="aos-init aos-animate">
            Geramos resultado <br /> através do ensino de <br /> programação
          </h3>
        </div>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {testimonialsData.map((testimonial, index) => (
            <div key={testimonial.id} className="mt-10">
              <div
                data-aos-delay="100"
                className={`pb-10 flex flex-col ${
                  index !== testimonialsData.length - 1
                    ? "border-b border-b-[#29292e]"
                    : ""
                }`}
              >
                <div>
                  <p className="text-[16px] leading-[26px]">
                    {testimonial.message}
                  </p>
                </div>
                <div className="flex flex-row mt-4 items-center">
                  <div className="w-[64px] h-[64px] border-[#3c3c42] border-2 flex items-center justify-center rounded-full">
                    <Image
                      src={testimonial.image}
                      width={52}
                      height={52}
                      alt={testimonial.name}
                      style={{ borderRadius: "50%", padding: "1px" }}
                    />
                  </div>
                  <div className="flex flex-col ml-5">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <span className="text-[#a8a8b3]">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TestimonialsSection };