

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { makeStore } from "@/store/createStore";
import { selectorsStructure } from "@/ducks/structure";
import { getPathImage } from "@/helpers/getPathImageCockipt";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

export function StructureComponent({ structureData }: any) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={getPathImage(structureData[0].image)}
            alt="Estrutura"
            width={600}
            height={400}
            className="rounded-lg "
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">{structureData[0].title}</h2>
          <p className="text-gray-600 mb-8">{structureData[0].description}</p>
          <div className="grid grid-cols-3 gap-4">
            {structureData[0]?.statistics?.map((stat: { value: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; label: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => {
              return (  
                <div
                  key={index}
                  className="flex flex-col	justify-center	items-center gap-4	 h-60 bg-gray-900  text-white p-4 rounded-lg
                hover:bg-gray-900  transition-colors duration-200 hover:text-white 
                md:bg-slate-50 md:text-gray-900

                "
                >
                  <span className="text-5xl font-bold">{stat.value}</span>
                  <p className="text-xs">{stat.label}</p>
                </div>
              );
            })}
          </div>
          <Button
            variant="default"
            className="bg-green-600 hover:bg-green-700 text-white mt-8"
          >
            {structureData[0].ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}

const wrapperCourses = (Component: any) => {
  return function WrapperCourses() {
    const store = makeStore.getState();
    const structureData = selectorsStructure.selectStructureData(store);
    return <Component structureData={structureData} />;
  };
};

export const StructureSection = wrapperCourses(StructureComponent);
