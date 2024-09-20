"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CounterDevProps {
  startCount?: number;
}

export default function CounterDev({ startCount = 574 }: CounterDevProps) {
  const [counter, setCounter] = useState(startCount);
  const ref = useRef(null);
  const counterView = useInView(ref);

  useEffect(() => {
    const interval = setUpCounter(counterView, counter, setCounter, startCount);
    return () => clearInterval(interval);
  }, [counterView, startCount]);

  return (
    <div className="w-[1120px] flex flex-row items-center h-[500px] justify-between">
      <RenderImage />
      <RenderText counter={counter} refElement={ref} />
    </div>
  );
}

function setUpCounter(
  counterView: boolean,
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  startCount: number
) {
  const interval = setInterval(() => {
    if (counterView) {
      incrementCounter(counter, setCounter, interval);
    } else {
      resetCounter(counter, setCounter, startCount, interval);
    }
  }, 30);

  return interval;
}

function incrementCounter(
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  interval: NodeJS.Timeout
) {
  setCounter((prevCounter) => {
    if (prevCounter >= 600) {
      clearInterval(interval);
      return prevCounter;
    }
    return prevCounter + 1;
  });
}

function resetCounter(
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  startCount: number,
  interval: NodeJS.Timeout
) {
  setCounter((prevCounter) => {
    if (prevCounter === 600) {
      clearInterval(interval);
      return startCount;
    }
    return prevCounter;
  });
}

function RenderImage() {
  return (
    <div>
      <Image
        src={"/astronauts.svg"}
        width={496}
        height={496}
        alt="vetor Gráfico"
      />
    </div>
  );
}

function RenderText({
  counter,
  refElement,
}: {
  counter: number;
  refElement: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <div className="text-[#e1e1e6] flex justify-center flex-col">
      <div className="mb-10">
        <h3
          data-aos="fade-up"
          data-aos-id="aos-connected-devs"
          className="mb-6 font-bold text-5xl leading-[54px] aos-init aos-animate"
        >
          Mais de{" "}
          <strong ref={refElement} className="text-[#04d361]">
            {counter} mil
          </strong>{" "}
          <br /> devs já se conectaram.
        </h3>
        <p
          data-aos-delay="700"
          data-aos="fade-in"
          className="leading-[26px] aos-init aos-animate"
        >
          Comece a avançar agora mesmo na direção dos seus <br /> objetivos e
          alcance o seu lugar como dev.
        </p>
      </div>

      <div className="rounded-[5px] w-[240px] h-[63px] flex items-center justify-center font-bold cursor-pointer transition duration-150 ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] bg-[#121214] hover:bg-[#996dff] uppercase text-white border border-[#8257E5]">
        <a href="">começar agora</a>
      </div>
    </div>
  );
}
