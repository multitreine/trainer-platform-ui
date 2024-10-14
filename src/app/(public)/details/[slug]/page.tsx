import Image from "next/image";
import { TeachersCoursesDetails } from "@/components/TeachersCoursesDetails";
import { CoursesSection } from "@/components/Courses";
import { PriceSection } from "@/components/PriceSection";
import { CourseTabs } from "@/components/CourseTabs";
import { wrapperDataPage } from "./data";
import { CourseDetails } from "@/store/courses/types";
import { getPathImage } from "@/helpers/getPathImageCockipt";

export type Details = {
  details: CourseDetails;
};

function Details({ details }: Details) {
  // console.log(JSON.stringify(details, null, 2));
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow mt-28 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 ">
            <div className="">
              <h1 className="text-4xl font-bold mb-4">{details?.title}</h1>
              <p className="text-gray-600 mb-4">{details?.subTitle}</p>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
              <Image
                src={getPathImage(details?.image?.path)}
                alt="Course Image"
                width={800}
                height={400}
                className="w-full"
              />
            </div>

            <CourseTabs details={details} />
          </div>

          <PriceSection details={details} />
        </div>

        <TeachersCoursesDetails details={details} />

        <CoursesSection />
      </div>
    </div>
  );
}

export default wrapperDataPage(Details);
