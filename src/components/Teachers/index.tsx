
import { useTeachersStore } from "@/store/teachers";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Teacher {
  id: string;
  name: string;
  description: string;
  image: string;
  expertise: string;
}

interface TeachersComponentProps {
  selectorsData: Teacher[];
}

export default function TeachersComponent({ selectorsData }: TeachersComponentProps) {
  if (selectorsData?.length === 0) {
    return null
  }
  return (
    <section className="py-12 bg-[#B2B2B2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Conheça nossos professores</h2>
        <div className="flex flex-wrap gap-12 p-4 pl-0">
          {selectorsData?.map((teacher) => (
            <div key={teacher.id} className="relative w-full max-w-md mb-8">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="flex items-center">
                  <div className="flex-1 p-6 pr-32">
                    <div className="relative z-10">
                      <h2 className="text-white text-2xl font-bold mb-1">
                        {teacher.name}
                      </h2>
                      {teacher.expertise ? (
                        <Badge variant="multiTraine">{teacher.expertise}</Badge>
                      ) : null}
                      <p className="text-gray-400 text-sm -mb-1 mr-4">
                        {teacher.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 h-48 z-20">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-900 shadow-lg">
                  <Image
                    src={getPathImage(teacher.image)}
                    alt={`Foto de perfil de ${teacher.name}`}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const wrapperCourses = (Component: any) => {
  return async function WrapperCourses() {
    const teachers = await useTeachersStore.getState().fetchTeachers()
    const selectorsData = useTeachersStore.getState().data
    return <Component selectorsData={selectorsData} />;
  };
};

export const TeachersSection = wrapperCourses(TeachersComponent);
