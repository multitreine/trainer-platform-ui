"use client";
import dynamic from "next/dynamic";
import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollAutomaticTeachers } from "../scrollAutomaticTeachers";
import { useCoursesStore } from "@/store/courses";
import { useEffect } from "react";
import { getPathImage } from "@/helpers/getPathImageCockipt";

type Filtros = {
  category?: string[];
  duration?: string[];
  teacher?: string[];
};

type ListaCursosProps = {
  useCardsHome?: boolean;
  filtros?: Filtros;
  coursesData?: any[];
};

function ListaCursosComponent({
  coursesData = [],
  filtros = {},
  useCardsHome = false,
}: ListaCursosProps) {
  const cursosFiltrados = coursesData.filter((curso: any) => {
    const cardsList = useCardsHome ? curso.cardsHome : curso.cards;

    if (!curso?.isActive || _.isEmpty(cardsList)) {
      return false;
    }

    return cardsList.some(
      (card: any) =>
        (!filtros?.category ||
          filtros?.category?.length === 0 ||
          filtros?.category?.includes(card?.category)) &&
        (!filtros?.duration ||
          filtros?.duration?.length === 0 ||
          filtros?.duration?.includes(card?.duration)) &&
        (!filtros?.teacher ||
          filtros?.teacher?.length === 0 ||
          filtros?.teacher.some((teacher) => card?.teacher?.includes(teacher)))
    );
  });

  if (_.isEmpty(cursosFiltrados)) {
    return <p>Nenhum curso encontrado com os filtros aplicados.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cursosFiltrados.map((curso: any) => {
        const cardsList = useCardsHome ? curso.cardsHome : curso.cards;

        return cardsList.map((card: any) => (
          <div
            key={card.id}
            className="flex flex-col justify-between bg-white rounded-lg shadow-md overflow-hidden"
            style={{ height: "100%" }}
          >
            {card?.image && (
              <div className="overflow-hidden">
                <Image
                  src={getPathImage(card?.image)}
                  alt={card.title}
                  layout="responsive"
                  width={100}
                  height={100}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="/placeholder.svg?height=100&width=100"
                  className="object-cover w-full h-auto"
                />
              </div>
            )}
            <div className="p-4 flex-grow flex flex-col space-y-4">
              <h3 className="text-xl p-0 font-semibold mb-2">{card?.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow min-h-[64px]">
                {card?.description}
              </p>

              {_.isEmpty(card?.teacher) ? null : (
                <ScrollAutomaticTeachers instrutores={card?.teacher} />
              )}

              <div className="mt-4 flex justify-between items-center">
                {card.category && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    {card.category}
                  </span>
                )}
                {card.duration && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    {card.duration}
                  </span>
                )}
              </div>
            </div>
            {card?.ctaUrl && (
              <div className="p-[0.7rem] mt-auto">
                <Link href={card?.ctaUrl || ""}>
                  <Button variant="multiTrainee" className="w-full">
                    {card?.ctaText}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        ));
      })}
    </div>
  );
}

const wrapperCatalogCourses = (Component: any) => {
  return function wrapperCatalogCourses({
    filtros,
    useCardsHome,
  }: {
    filtros?: Filtros;
    useCardsHome?: boolean;
  }) {
    const { fetchCourses, courses } = useCoursesStore();

    useEffect(() => {
      fetchCourses();
    }, [fetchCourses]);

    if (!courses || courses.length === 0) {
      return <h1>Sem dados!</h1>;
    }

    return (
      <Component
        coursesData={courses}
        filtros={filtros}
        useCardsHome={useCardsHome}
      />
    );
  };
};

const ListaCursos = wrapperCatalogCourses(ListaCursosComponent);

export default ListaCursos;