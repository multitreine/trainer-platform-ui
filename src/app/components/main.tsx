"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { Courses } from "../components/Courses/";
import CounterDev from "./CounterDev";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DataCourses from "../../../CursesData.json";
import { Banner } from "./banner";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function Main() {
  const [Data, setData] = useState(DataCourses);

  useEffect(() => {
    AOS.init({
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);

  return (
    <div className={roboto.className}>
      <main className=" flex justify-center  flex-col  ">
        
        <Banner/>

        <Courses courses={Data} />

        
        {/* section four */}
        <section className="min-h-[679px] flex items-center justify-center bg-[#121214]">
          <div className="w-[1120px] flex flex-col justify-center items-center">
            <div className="flex  justify-between items-center mb-20 w-full">
              <h3
                data-aos="fade-up"
                className="font-bold text-5xl leading-[58px] aos-init aos-animate  text-[#e1e1e6] "
              >
                Impulsionamos milhares <br /> de devs diariamente
              </h3>
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                className="aos-init aos-animate"
              >
                <Image
                  src="/boosting.svg"
                  width={160}
                  height={50}
                  alt="Vetor gráfico"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 w-full gap-8 ">
              <div className="pb-4 ">
                <div
                  data-aos="fade-in"
                  data-aos-delay="200"
                  className="w-fit aos-init aos-animate  "
                >
                  <h4 className="text-[56px] pb-4 text-[#e1e1e6] w-fit font-bold">
                    <span className="text-[56px]  text-[#04d361] font-bold">
                      {" "}
                      +737{" "}
                    </span>{" "}
                    mil
                  </h4>
                  <div className=" bg-gradient-to-r from-[#8257e6] to-[rgba(130,87,230,.25)] h-[3px] w-full"></div>
                </div>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="pt-8 text-lg font-normal aos-init aos-animate text-[#e1e1e6]"
                >
                  Devs impactados por <br /> eventos e cursos gratuitos
                </p>
              </div>
              <div className="pb-4">
                <div
                  data-aos="fade-in"
                  data-aos-delay="250"
                  className="w-fit aos-init aos-animate"
                >
                  <h4 className="text-[56px] pb-4 text-[#e1e1e6] w-fit font-bold">
                    {" "}
                    <span className="text-[56px] text-[#04d361] font-bold">
                      {" "}
                      +34{" "}
                    </span>
                    mil
                  </h4>
                  <div className=" bg-gradient-to-r from-[#8257e6] to-[rgba(130,87,230,.25)] h-[3px] w-full"></div>
                </div>

                <p
                  data-aos="fade-up"
                  data-aos-delay="350"
                  className="pt-8 aos-init aos-animate  text-lg text-[#e1e1e6]"
                >
                  Alunos e <br /> alunas
                </p>
              </div>
              <div className="pb-4">
                <div
                  data-aos="fade-in"
                  data-aos-delay="300"
                  className="w-fit aos-init aos-animate"
                >
                  <h4 className="text-[56px] pb-4 text-[#e1e1e6] w-fit font-bold">
                    {" "}
                    <span className="text-[56px] text-[#04d361] font-bold">
                      +314{" "}
                    </span>
                    mil
                  </h4>
                  <div className=" bg-gradient-to-r from-[#8257e6] to-[rgba(130,87,230,.25)] h-[3px] w-full"></div>
                </div>

                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="pt-8 text-lg aos-init aos-animate text-[#e1e1e6]"
                >
                  Devs no canal <br />
                  do Youtube
                </p>
              </div>
              <div className=" ">
                <div
                  data-aos="fade-in"
                  data-aos-delay="350"
                  className="w-fit aos-init aos-animate"
                >
                  <h4 className="text-[56px] pb-4  text-[#e1e1e6] font-bold w-fit">
                    {" "}
                    <span className="text-[56px] text-[#04d361] font-bold">
                      +214{" "}
                    </span>
                    mil
                  </h4>
                  <div className=" bg-gradient-to-r from-[#8257e6] to-[rgba(130,87,230,.25)] h-[3px] w-full"></div>
                </div>

                <p
                  data-aos="fade-up"
                  data-aos-delay="450"
                  className="pt-8  text-lg aos-init aos-animate text-[#e1e1e6] "
                >
                  Devs na comunidade <br /> aberta no Discord
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[886px] w-full flex items-center justify-center py-40 bg-gradient-to-r from-[#121214]  to-[#09090a]">
          <div className="w-[1120px]  flex flex-col text-white justify-between h-[556px]  ">
            <div className="flex flex-row  items-center w-full justify-between  ">
              <div className="text-5xl font-bold leading-[58px] ">
                <h3
                  data-aos="fade-up"
                  className=" aos-init aos-animate
 "
                >
                  {" "}
                  Método desenhado para <br /> acelerar a sua evolução
                </h3>
              </div>
              <div className="relative min-h-full h-[96px]  aos-init aos-animate before:bg-[#3c3c42] before:w-[50px] before:h-[1px] before:absolute before:top-0  before:content-['']">
                <p
                  className="text-base pt-6 leading-[26px] "
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  {" "}
                  Combinamos 3 pilares para você conquistar experiência, <br />
                  dominar as ferramentas e saber se posicionar profissionalmente
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-8   ">
              <div
                data-aos-delay="100"
                data-aos="fade-up"
                className=" flex flex-col w-[352px]  relative aos-init aos-animate border-[#29292e]  bg-[#121214] border pr-[52px]  pl-[24px] rounded-lg py-8  h-[378px] justify-evenly"
              >
                <div className="mb-4 h-[166px] flex justify-between    flex-col ">
                  <div className="">
                    {" "}
                    <Image
                      src="/target.svg"
                      width={80}
                      height={80}
                      alt="vetor gráfico"
                    />
                  </div>

                  <h4 className="font-bold text-[32px]  ">Foco</h4>
                </div>

                <p className=" text-[#a8a8b3] ">
                  Programação é um universo infinito,
                  <br /> logo ter foco é essencial. Nós vamos <br /> direto ao
                  ponto no que realmente <br /> importa para você dominar as{" "}
                  <br /> ferramentas, não apenas conhecê-las.
                </p>
                <div className="  absolute top-[77px] bottom-0  -right-[10px]">
                  <Image
                    src="/arrow.svg"
                    width={80}
                    height={12}
                    alt="vetor gráfico"
                  />
                </div>
              </div>

              <div
                className=" flex flex-col w-[352px] relative  aos-init aos-animate border-[#29292e] border bg-[#121214] rounded-lg py-8  pr-[52px]  pl-[24px]  h-[378px] justify-evenly
               "
                data-aos-delay="200"
                data-aos="fade-up"
              >
                <div className="mb-4 h-[166px] flex justify-between flex-col ">
                  <div className="">
                    {" "}
                    <Image
                      src="/laptop.svg"
                      width={80}
                      height={80}
                      alt="Vetor Gráfico"
                    />{" "}
                  </div>
                  <h4 className="font-bold text-[32px]">Pratica</h4>
                </div>

                <p className=" text-[#a8a8b3] ">
                  A programação é uma disciplina <br /> prática. São as horas de
                  código que <br /> vão te preparar e dar a experiência <br />{" "}
                  necessária para tomar as melhores <br />
                  decisões no mundo real.
                </p>
                <div className="  absolute top-[77px] bottom-0  -right-[10px]">
                  <Image
                    src="/arrow.svg"
                    width={80}
                    height={12}
                    alt="vetor gráfico"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className=" flex flex-col w-[352px] relative  aos-init aos-animate   h-[378px]  bg-[#121214] border-[#29292e]  aos-init aos-animate pr-[52px] pl-[24px]  border rounded-lg py-8  justify-evenly "
              >
                <div className="mb-4 h-[166px] flex justify-between flex-col">
                  <div>
                    <Image
                      src="/groups.svg"
                      width={80}
                      height={80}
                      alt="Vetor Gráfico"
                    />
                  </div>

                  <div>
                    <h4 className=" font-bold text-[32px]">Grupo</h4>
                  </div>
                </div>

                <p className=" text-[#a8a8b3]  ">
                  A conexão entre Devs impulsiona seu <br /> repertório técnico,
                  suas habilidades <br /> comportamentais e sua rede de <br />{" "}
                  contatos. Além de ajudar a assimilar <br /> e fixar todo
                  aprendizado.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[1011px] flex items-center justify-center b border-b border-b-[#29292e]">
          <div className="w-[1120px] text-[#e1e1e6] h-[691px]  ">
            <div className="font-bold leading-[54px] text-5xl w-full ">
              <h3 data-aos="fade-up" className="aos-init aos-animate ">
                Geramos resultado <br /> através do ensino de <br /> programação
              </h3>
            </div>
            <div className=" flex gap-20 w-full  ">
              <div className="mt-20 w-full">
                <div
                  data-aos-delay="100"
                  className=" border-b pb-10  border-b-[#29292e] min-w-full flex justify-around flex-col"
                >
                  <div>
                    <p className=" text-[16px]   leading-[26px]">
                      &quot;Fiz muitas conexões que me levaram a hoje me
                      redescobrir dentro da <br /> tecnologia e atuar com
                      algumas stacks que além de estar em alta no <br /> mercado
                      fazem o meu dia ficar mais feliz. Sou eternamente grato a{" "}
                      <br />
                      Rocketseat assim como sou um eterno aluno do inicio ao
                      fim!&quot;
                    </p>
                  </div>

                  <div className="flex flex-row mt-4  items-center  ">
                    <div className="  w-[64px] h-[64px]  border-[#3c3c42] border-2 flex items-center justify-center  rounded-full">
                      <Image
                        src="/henrique-weiand.webp"
                        width={52}
                        height={52}
                        alt="Author"
                        style={{ borderRadius: "50%", padding: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <h4 className=" font-bold">Henrique Weiand</h4>
                      <span className="text-[#a8a8b3]">
                        Remote TechLead/Developer
                      </span>
                    </div>
                  </div>
                </div>
                <div data-aos-delay="150">
                  <p className=" text-[16px] pt-10  leading-[26px] ">
                    &quot;O apoio da comunidade, e a estrutura do curso foram
                    fundamentais <br /> para o meu crescimento e entender como
                    aquelas linhas de código <br /> faziam sentido completo! No
                    backend, frontend e mobile, é indescritível <br /> poder
                    criar seu produto! Obrigada Rocketseat, U Rock&quot;
                  </p>
                  <div className="flex flex-row mt-4  items-center  ">
                    <div className="  w-[64px] h-[64px]  border-[#3c3c42] border-2 flex items-center justify-center  rounded-full">
                      <Image
                        src="/paloma-andrade.webp"
                        width={52}
                        height={52}
                        alt="Author"
                        style={{ borderRadius: "50%", padding: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <h4 className=" font-bold">Paloma Andrade de Oliveira</h4>
                      <span className=" text-[#a8a8b3]">
                        Engenheira de Software | Sauce Labs
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos-delay="200" className="w-full">
                <div className=" border-b border-b-[#29292e] pb-10 flex justify-around flex-col">
                  <p className=" text-[16px]   leading-[26px]">
                    &quot;Hoje faço trabalhos para clientes até fora do Brasil,
                    e isso em 11 meses <br /> que comecei a aprender com a
                    Rocketseat. Tenho orgulho de dizer que <br /> recebo no
                    mínimo 3 contatos para entrevistas pelo LinkedIn por semana,
                    <br /> e sou um profissional procurado.&quot;
                  </p>
                  <div className="flex flex-row mt-4  items-center  ">
                    <div className="  w-[64px] h-[64px]  border-[#3c3c42] border-2 flex items-center justify-center  rounded-full">
                      <Image
                        src="/anderson-alves.png"
                        width={52}
                        height={52}
                        alt="Author"
                        style={{ borderRadius: "50%", padding: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <h4 className=" font-bold">Anderson Alves</h4>
                      <span className=" text-[#a8a8b3]">
                        Fundador e Negócios na Yoopih
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div data-aos-delay="250">
                  <p className=" text-[16px] pt-10  leading-[26px]">
                    &quot;Aprendi muito e de maneira bem rápida, consegui um
                    novo emprego em <br /> uma empresa incrível e trabalho com o
                    que eu amo nas tecnologias que <br />
                    eu mais gosto no momento. Só tenho a agradecer a toda a
                    equipe por <br /> tornar isso possível!&quot;
                  </p>
                  <div className="flex flex-row mt-4  items-center w-full ">
                    <div className="  w-[64px] h-[64px]  border-[#3c3c42] border-2 flex items-center justify-center  rounded-full">
                      <Image
                        src="/melissa-fernandes.webp"
                        width={52}
                        height={52}
                        alt="Author"
                        style={{ borderRadius: "50%", padding: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <h4 className=" font-bold">Melissa Fernandes Novais</h4>
                      <span className="text-[#a8a8b3]">
                        Desenvolvedora Front-end
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-[#121214]  pt-40 pb-[100px] flex flex-col justify-center  border-b border-b-[#29292e]  items-center w-full h-[696px] ">
          <div className=" w-[1120px]   flex flex-col justify-center h-full  items-center ">
            <div className="flex flex-col text-[#e1e1e6] h-full text-center  w-full ">
              <h3
                data-aos="fade-up"
                className="mb-6 font-bold text-5xl aos-init aos-animate   leading-[54px]"
              >
                {" "}
                Empresas que contratam <br />
                nossos alunos
              </h3>
              <p
                data-aos="fade-in"
                data-aos-delay="100"
                className=" aos-init aos-animate leading-[26px]"
              >
                Existe um abismo entre profissionais de programação e o mercado.{" "}
                <br />
                Nosso propósito é construir uma ponte entre vocês através da
                educação.
              </p>
            </div>
            <div className="text-white w-full min-h-[171px] mt-20">
              <div className=" flex flex-wrap gap-x-10 gap-y-14 w-full h-full items-center  justify-center  ">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="aos-init aos-animate"
                >
                  <Image
                    src="/meta.webp"
                    width={114.01}
                    height={43}
                    alt="Author"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="w-87 h-[35px]  aos-init aos-animate     "
                >
                  <Image
                    src="/ciet.png"
                    width={87}
                    height={10}
                    alt="logo ciet"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="aos-init aos-animate"
                >
                  <Image
                    src="/totvs.webp"
                    width={150}
                    height={44.01}
                    alt="Author"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="350"
                  className="aos-init aos-animate"
                >
                  <Image
                    src="/accenture.webp"
                    width={162}
                    height={43}
                    alt="Author"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="aos-init aos-animate"
                >
                  <Image
                    src="/stone.webp"
                    width={120}
                    height={45}
                    alt="Author"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="450"
                  className="aos-init aos-animate"
                >
                  <Image src="/itau.png" width={57} height={57} alt="Author" />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="aos-init aos-animate"
                >
                  <Image
                    src="/avanade.webp"
                    width={205}
                    height={43}
                    alt="Author"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="550"
                  className="aos-init aos-animate"
                >
                  <Image
                    src="/compasso.webp"
                    width={208}
                    height={45.99}
                    alt="Author"
                  />
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="aos-init aos-animate"
                >
                  <Image
                    src="/nttdata.webp"
                    width={148}
                    height={36}
                    alt="Author"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="650"
                  className="aos-init aos-animate"
                >
                  <Image
                    src="/invilla.webp"
                    width={148}
                    height={47}
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r relative from-[#121214]  py-[105px] to-[#09090a] w-full   h-[710px] flex justify-center items-center ">
          <CounterDev />
          <div className=" absolute h-[1px] bg-gradient-to-r w-full to-[#323238] bottom-0 from-[#3232384d]">
            {" "}
          </div>
        </section>
      </main>
    </div>
  );
}
