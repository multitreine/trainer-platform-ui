"use client";

import Image from "next/image";
import Slider from "react-slick";
import { useEffect } from "react";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import _ from "lodash";
import { useHeroStore } from "@/store/hero";

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
  autoplay: true,
};

const renderMedia = (slide: Slide) => {
  if (slide?.pathImage) {
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

  return (
    <div className="relative slider-container bg-slate-600">
      {slides?.length > 1 ? (
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
        <Link href={slides[0]?.userDestination || ""} key={slides[0]?.id}>
          <section key={slides[0]?.id} className="container items-center">
            <div className=" relative">{renderMedia(slides[0])}</div>
          </section>
        </Link>
      )}
    </div>
  );
}

const wrapperHero = (Component: any) => {
  return function WrapperHero() {
    const { fetchHero, data, loading } = useHeroStore();

    useEffect(() => {
      fetchHero(); 
    }, [fetchHero]);

    if (loading) {
      return (
        <div className="relative slider-container bg-slate-600">
          <Skeleton
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
            }}
          />
        </div>
      );
    }

    return <Component heroData={{ data, loading, error: null }} />;
  };
};


export const HeroSection = wrapperHero(Hero);
