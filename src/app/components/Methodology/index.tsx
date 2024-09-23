import Image from "next/image";

const data = {
  title: "Método desenhado para acelerar a sua evolução",
  description:
    "Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionar profissionalmente",
  items: [
    {
      icon: "/target.svg",
      iconAlt: "Experiência",
      title: "Experiência",
      description:
        "Aprenda na prática com desafios e projetos reais que vão te levar para o próximo nível.",
      delay: 0,
    },
    {
      icon: "/target.svg",
      iconAlt: "Ferramentas",
      title: "Ferramentas",
      description:
        "Domine as tecnologias mais modernas do mercado e acelere a sua evolução.",
      delay: 100,
    },
    {
      icon: "/laptop.svg",
      iconAlt: "Posicionamento",
      title: "Posicionamento",
      description:
        "Aprenda como se destacar no mercado de trabalho e conquistar as melhores oportunidades.",
      delay: 200,
    },
    {
      icon: "/laptop.svg",
      iconAlt: "Posicionamento",
      title: "Posicionamento",
      description:
        "Aprenda como se destacar no mercado de trabalho e conquistar as melhores oportunidades.",
      delay: 200,
    },
  ],
};

const Methodology = () => {
  return (
    <>
      <section className=" flex items-center justify-center bg-gradient-to-r from-[#121214]  to-[#09090a]">
        <div className=" flex flex-col text-white justify-between ">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="text-5xl font-bold leading-[58px]">
              <h3 data-aos="fade-up" className="aos-init aos-animate">
                {data.title}
              </h3>
            </div>
            {/* <div className="relative min-h-full h-[96px] before:bg-[#3c3c42] before:w-[50px] before:h-[1px] before:absolute before:top-0  before:content-['']">
              <p
                className="text-base pt-6 leading-[26px]"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                {data.description}
              </p>
            </div> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((item, index) => (
              <div
                key={index}
                data-aos-delay={item.delay}
                data-aos="fade-up"
                className="flex flex-col sm:w-[352px] relative aos-init aos-animate border-[#29292e] bg-[#121214] border pr-[52px] pl-[24px] rounded-lg py-8 h-[378px] justify-evenly"
              >
                <div className="mb-4 h-[166px] flex justify-between flex-col">
                  <div>
                    <Image
                      src={item.icon}
                      width={80}
                      height={80}
                      alt={item.iconAlt}
                    />
                  </div>
                  <h4 className="font-bold text-[32px]">{item.title}</h4>
                </div>
                <p className="text-[#a8a8b3]">{item.description}</p>
                {
                  data.items.length - 1 !== index &&
                    <div className="absolute top-[350px] bottom-0 -right-[10px] sm:top-[77px]">
                      <Image
                        src="/arrow.svg"
                        width={80}
                        height={12}
                        alt="vetor gráfico"
                        className="rotate-90 sm:rotate-0"
                      />
                    </div>
                }
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { Methodology };
