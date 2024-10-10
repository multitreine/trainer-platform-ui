
import { selectorsTeachers } from "@/ducks/teachers";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import { makeStore } from "@/store/createStore";
import Image from "next/image";


interface Teacher {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface TeachersComponentProps {
  selectorsData: Teacher[];
}

export default function TeachersComponent({ selectorsData }: TeachersComponentProps) {
  return (
    <section className="py-12 bg-[#B2B2B2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Conheça nossos professores</h2>
        <div className="flex flex-wrap justify-center gap-12 p-4 ">
          {selectorsData?.map((teacher) => (
            <div key={teacher.id} className="relative w-full max-w-md mb-8">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="flex items-center">
                  <div className="flex-1 p-6 pr-32">
                    <div className="relative z-10">
                      <h2 className="text-white text-2xl font-bold mb-1">
                        {teacher.name}
                      </h2>
                      <p className="text-gray-400 text-sm mb-0 mr-4">
                        {teacher.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-40 h-40 z-20">
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
  return function WrapperCourses() {
    const store = makeStore.getState();
    const selectorsData = selectorsTeachers.selectTeachersData(store);
    return <Component selectorsData={selectorsData} />;
  };
};

export const TeachersSection = wrapperCourses(TeachersComponent);
