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
import { CardPublic } from "./cards/public";
import { Methodology } from "./Methodology";
import { TestimonialsSection } from "./TestimonialsSection";
import { Companies } from "./Companies";

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
        <Banner />
        <Courses courses={Data} />
        <CardPublic />

        <Methodology />
        <TestimonialsSection />

        <Companies />

        <section className="bg-gradient-to-r relative from-[#121214]  py-[105px] to-[#09090a] h-[710px] flex justify-center items-center ">
          <CounterDev />
          <div className=" absolute h-[1px] bg-gradient-to-r to-[#323238] bottom-0 from-[#3232384d]">
            {" "}
          </div>
        </section>

      </main>
    </div>
  );
}
