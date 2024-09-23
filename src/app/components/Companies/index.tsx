import Image from "next/image";

const companiesData = [
  {
    src: "/meta.webp",
    width: 114.01,
    height: 43,
    alt: "Meta",
    delay: 200,
  },
  {
    src: "/ciet.png",
    width: 87,
    height: 10,
    alt: "CIET",
    delay: 250,
  },
  {
    src: "/totvs.webp",
    width: 150,
    height: 44.01,
    alt: "Totvs",
    delay: 300,
  },
  {
    src: "/accenture.webp",
    width: 162,
    height: 43,
    alt: "Accenture",
    delay: 350,
  },
  {
    src: "/stone.webp",
    width: 120,
    height: 45,
    alt: "Stone",
    delay: 400,
  },
  {
    src: "/itau.png",
    width: 57,
    height: 57,
    alt: "Itaú",
    delay: 450,
  },
  {
    src: "/avanade.webp",
    width: 205,
    height: 43,
    alt: "Avanade",
    delay: 500,
  },
  {
    src: "/compasso.webp",
    width: 208,
    height: 45.99,
    alt: "Compasso",
    delay: 550,
  },
  {
    src: "/nttdata.webp",
    width: 148,
    height: 36,
    alt: "NTT Data",
    delay: 600,
  },
  {
    src: "/invilla.webp",
    width: 148,
    height: 47,
    alt: "Invilla",
    delay: 650,
  },
];

const Companies = () => {
  return (
    <>
      <section className=" pt-40 pb-[100px] flex flex-col justify-center border-b border-b-[#29292e] items-center h-auto">
        <div className="px-4 lg:w-[1120px] flex flex-col justify-center items-center">
          <div className="flex flex-col text-[#e1e1e6] text-center w-full">
            <h3
              data-aos="fade-up"
              className="mb-6 font-bold text-3xl md:text-4xl lg:text-5xl aos-init aos-animate leading-[1.2]"
            >
              Empresas que contratam <br />
              nossos alunos
            </h3>
            <p
              data-aos="fade-in"
              data-aos-delay="100"
              className="aos-init aos-animate leading-[26px] text-sm md:text-base"
            >
              Existe um abismo entre profissionais de programação e o mercado.{" "}
              <br />
              Nosso propósito é construir uma ponte entre vocês através da
              educação.
            </p>
          </div>
          <div className="text-white w-full min-h-[171px] mt-10">
            <div className="flex flex-wrap gap-x-10 gap-y-14 w-full items-center justify-center">
              {companiesData.map((company, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={company.delay}
                  className="aos-init aos-animate flex-shrink-0 max-w-[150px]"
                >
                  <Image
                    src={company.src}
                    alt={company.alt}
                    width={company.width}
                    height={company.height}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Companies };
