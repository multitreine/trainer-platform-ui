"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { makeStore } from "@/store/createStore";
import { operationsHero, selectorsHero } from "@/ducks/hero";
import { useEffect, useState } from "react";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

interface Slide {
  isImage: boolean;
  pathImage?: string;
  title: string;
  pathAction: string;
  textAction: string;
  isSlideActive: boolean;
  userDestination: string;
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
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  with: "100%",
};

const renderMedia = (slide: Slide) => {
  if (slide.pathImage) {
    const pathImage = getPathImage(slide.pathImage!);
    return (
      <div>
        <Image
          src={pathImage}
          alt={slide.title}
          layout="responsive"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          quality={100}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            zIndex: 10,
          }}
        />
      </div>
    );
  }

  return null;
};

export function Hero({ heroData }: HeroSectionProps) {
  const { data: slides } = heroData || {};

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  if (!isClient) {
    return <></>;
  }



  return (
    <div className="relative slider-container bg-slate-600">
      {slides.length > 1 ? (
        <Slider {...settings}>
          {slides?.map((slide) => (
            <Link href={slide?.userDestination || ""} key={slide.id}>
              <section className="">
                <div className="">{renderMedia(slide)}</div>
              </section>
            </Link>
          ))}
        </Slider>
      ) : (
        slides?.map((slide) => (
          <>
            <Link href={slide?.userDestination || ""} key={slide.id}>
              <section key={slide.id} className="container items-center">
                <div className=" relative">{renderMedia(slide)}</div>
              </section>
            </Link>
          </>
        ))
      )}
    </div>
  );
}

const wrapperHero = (Component: any) => {
  return function WrapperHero() {
    const store = makeStore.getState() || {};
    console.log("heroData =>>", JSON.stringify(store, null, 2));

    const heroData = {
      data: selectorsHero.selectHeroData(store),
      loading: selectorsHero.selectHeroLoading(store),
      error: selectorsHero.selectHeroError(store),
    };

    return <Component heroData={heroData} />;
  };
};

export const HeroSection = wrapperHero(Hero);
