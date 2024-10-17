"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTeachersStore } from "@/store/teachers";
import { useEffect } from "react";
import { getPathImage } from "@/helpers/getPathImageCockipt";

function ListaProfessores({ selectorsData }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {selectorsData?.map((professor: any) => (
        <Card className="w-full max-w-sm mx-auto overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="relative w-full pb-[100%]">
            <Image
              src={getPathImage(professor?.image)}
              alt={professor?.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-3xl"
            />
          </div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {professor?.name}
            </h2>
            {professor?.expertise && (
              <Badge variant="multiTraine">{professor?.expertise}</Badge>
            )}
            {professor?.categoria && <Badge variant="multiTraine">{professor?.categoria}</Badge>}
            <p className="text-base font-semibold text-gray-800">
              {professor?.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const wrapperCourses = (Component: any) => {
  return function WrapperCourses() {
    const { data, fetchTeachers, loading } = useTeachersStore();

    useEffect(() => {
      fetchTeachers();
    }, [fetchTeachers]);

    if (loading) {
      return <p>Carregando...</p>;
    }

    console.log(data);
    return <Component selectorsData={data} />;
  };
};

export const TeachersCatalog = wrapperCourses(ListaProfessores);
