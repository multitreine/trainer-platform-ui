"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { makeStore } from "@/store/createStore";
import { selectorsHero } from "@/ducks/hero";
import { useEffect, useState } from "react";

interface Slide {
  isvideo: boolean;
  pathVideo?: string;
  isImage: boolean;
  pathImage?: string;
  title: string;
  pathAction: string;
  textAction: string;
  isSlideActive: boolean;
  id: string;
}

interface HeroSectionProps {
  heroData: {
    data: Slide[];
    loading: boolean;
    error: any;
  };
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  cssEase: "linear",
};

const getMediaToRender = (slide: Slide) => {
  if (slide.isImage && slide.isvideo) {
    if (slide.pathImage) return "image";
    if (slide.pathVideo) return "video";
  }

  if (slide.isImage && slide.pathImage) return "image";
  if (slide.isvideo && slide.pathVideo) return "video";

  return null;
};

const renderMedia = (slide: Slide) => {
  const mediaType = getMediaToRender(slide);

  if (mediaType === "image") {
    return (
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-green-600">
        <Image
          src={slide.pathImage!}
          alt={slide.title}
          layout="fill"
          objectFit="cover"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-green-600"
        />
      </div>
    );
  }

  if (mediaType === "video") {
    return (
      <video
        className="w-full h-auto md:w-80 md:h-80 rounded-full border-8 border-green-600"
        controls
      >
        <source src={slide.pathVideo!} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    );
  }

  return null;
};

export function Hero({ heroData }: HeroSectionProps) {
  const { data: slides } = heroData;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return <></>;
  }

  return (
    <div className="slider-container">
      {slides.length > 1 ? (
        <Slider {...settings}>
          {slides.map((slide) => {
            return (
              <section
                key={slide.id}
                className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <Button
                    variant="default"
                    className="bg-green-600 hover:bg-green-700 text-white mr-4"
                  >
                    {slide.textAction}
                  </Button>
                </div>
                <div className="md:w-1/2 relative">{renderMedia(slide)}</div>
              </section>
            );
          })}
        </Slider>
      ) : (
        slides.map((slide) => (
          <section
            key={slide.id}
            className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-700 text-white mr-4"
              >
                {slide.textAction}
              </Button>
            </div>
            <div className="md:w-1/2 relative">{renderMedia(slide)}</div>
          </section>
        ))
      )}
    </div>
  );
}

const wrapperHero = (Component: any) => {
  return function WrapperHero() {
    const store = makeStore.getState();

    const heroData = {
      data: selectorsHero.selectHeroData(store),
      loading: selectorsHero.selectHeroLoading(store),
      error: selectorsHero.selectHeroError(store),
    };

    return <Component heroData={heroData} />;
  };
};

export const HeroSection = wrapperHero(Hero);
