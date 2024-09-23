import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function SliderBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
  };

  const slides = [
    {
      src: "https://via.placeholder.com/50x10.png?text=Slide+1",
      alt: "Slide 1",
    },
    {
      src: "url('/bg.png')",
      alt: "Slide 2",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <section
              className={`bg-[${slide.src}] bg-contain bg-no-repeat items-center `}
            >
              <div className="flex items-center text-center flex-col">
                <div className="" />
                <h1
                  data-aos="fade-in"
                  data-aos-delay="100"
                  className="font-bold text-[56px] mb-4 aos-init aos-animate leading-[60px]"
                >
                  Acelere cada etapa da sua <br /> carreira em programação
                </h1>
                <h2
                  data-aos="fade-in"
                  data-aos-delay="20"
                  className="leading-[26px] aos-init aos-animate text-[#e1e1e6] mb-10"
                >
                  O mapa completo para você impulsionar sua evolução e acessar{" "}
                  <br />
                  as melhores oportunidades da sua carreira como dev.
                </h2>
                <div className="rounded-[.3125rem] min-w-[280px] hover:bg-[#633bbc] transition-all duration-200 h-[56px] flex flex-row justify-center items-center bg-[#8257E5] mb-[7.25rem]">
                  <a
                    data-aos="fade-in"
                    data-aos-delay="300"
                    className="font-bold text-base aos-init aos-animate flex flex-row items-center justify-center leading-[16px] min-w-full min-h-full py-[15px] pl-6 pr-[16px] gap-6 uppercase"
                    href=""
                  >
                    <div className="mt-[2px] text-white">
                      <p>embarcar no foguete</p>
                    </div>
                    <span className="inline-block">
                      <Image
                        src="/arrow-right-bg-purple.svg"
                        width={32}
                        height={32}
                        alt="flecha"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        ))}
      </Slider>
      {/* <div className="w-full max-w-[69.375rem] max-h-[39rem] rounded-lg">
        <div className="relative pb-[56.548%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full bg-[#29292e] border-[#29292e] border rounded-lg"
            src="https://www.youtube.com/embed/uKsq7y6DJ84"
            title="Apresentação da Rocketseat"
            frameBorder="0"
            allow="autoplay"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
}

export { SliderBanner };
