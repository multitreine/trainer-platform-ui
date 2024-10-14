import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useStructureStore } from "@/store/structure";

export function StructureComponent({ structureData }: any) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={getPathImage(structureData?.image)}
            alt="Estrutura"
            width={600}
            height={400}
            className="rounded-lg "
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-6xl font-bold mb-4">{structureData?.title}</h2>
          <p className="text-gray-600 mb-8">{structureData?.description}</p>
          <div className="grid grid-cols-3 gap-4">
            {structureData?.statistics?.map((stat: any) => {
              return (
                <div
                  key={uuidv4()}
                  className="flex flex-col	justify-center	items-center gap-4	 h-60 bg-gray-900  text-white p-4 rounded-lg
                hover:bg-gray-900  transition-colors duration-200 hover:text-white 
                md:bg-slate-50 md:text-gray-900
                "
                >
                  <span className="text-5xl font-bold">{stat?.value}</span>
                  <p className="text-xs">{stat?.label}</p>
                </div>
              );
            })}
          </div>
          <Link href={structureData?.ctaAction || ''} rel="noopener noreferrer">
            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700 text-white mt-8"
            >
              {structureData?.ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const wrapperCourses = (Component: any) => {
  return async function WrapperCourses() {
    const structure = await useStructureStore.getState().fetchStructureData();
    const structureData = useStructureStore.getState().data;
    return <Component structureData={structureData} />;
  };
};

export const StructureSection = wrapperCourses(StructureComponent);
