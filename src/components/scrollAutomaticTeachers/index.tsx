"use client";
import { useEffect, useRef } from "react";

interface CursoComponentProps {
  instrutores: string[];
}

export const ScrollAutomaticTeachers = ({
  instrutores,
}: CursoComponentProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    const handleScroll = () => {
      if (scrollElement) {
        const isAtEnd =
          scrollElement.scrollLeft + scrollElement.clientWidth >=
          scrollElement.scrollWidth - 1;

        if (isAtEnd) {
          scrollElement.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(() => {
      if (scrollElement) {
        scrollElement.scrollBy({
          top: 0,
          left: 30,
          behavior: "smooth",
        });
        handleScroll();
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scrollRef} className="flex space-x-2 overflow-x-auto py-2">
      <p className="text-gray-600 mb-1">Instrutores:</p>
      {instrutores?.map((instrutor, index) => (
        <span
          key={index}
          className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded whitespace-nowrap"
        >
          {instrutor}
        </span>
      ))}
    </div>
  );
};
