import Image from "next/image";
import { Button } from "@/components/ui/button";
import { makeStore } from "@/store/createStore";
import { selectorsCourses } from "@/ducks/courses";
import { isActiveInDateRange } from "@/helpers/isActiveInDateRange";
import Link from "next/link";

export function CoursesComponent({ coursesData }: any) {
  const activeCourses = coursesData?.filter((data: { isActive: boolean }) => {
    return data.isActive;
  });

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Cursos de capacitação e aperfeiçoamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeCourses?.map(
            (data: { isActive: any; courses: any; id: any }) => {
              const { courses, id } = data;

              const { course } = courses;
              const { title, description, image, ctaText, ctaUrl } = course;

              const pathImage = `${process.env.COCKPIT_URL}/storage/uploads${image.path}`;

              return (
                <div
                  key={id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={pathImage}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="w-full"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <Button
                      variant="default"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Link href={ctaUrl}>{ctaText}</Link>
                    </Button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

const wrapperHero = (Component: any) => {
  return function WrapperHero() {
    const store = makeStore.getState();

    const coursesData = selectorsCourses
      .selectCoursesData(store)
      .map(
        (item: {
          startDate: any;
          endDate: any;
          cardCourses: any;
          _id: any;
        }) => {
          return {
            isActive: isActiveInDateRange(item.startDate, item.endDate),
            courses: {
              ...item.cardCourses,
            },
            id: item._id,
          };
        }
      );

    return <Component coursesData={coursesData} />;
  };
};

export const CoursesSection = wrapperHero(CoursesComponent);
