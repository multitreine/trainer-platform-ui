import Image from "next/image";
import { Button } from "@/components/ui/button";
import { makeStore } from "@/store/createStore";
import { operationsCourses, selectorsCourses } from "@/ducks/courses";
import { isActiveInDateRange } from "@/helpers/isActiveInDateRange";
import Link from "next/link";

interface CourseCard {
  title: string;
  description: string;
  image: { path: string };
  ctaText: string;
  ctaUrl: string;
  id: string;
}

interface Course {
  cards: CourseCard[];
  cardsHome: CourseCard[];
  details: any[];
  isActive: boolean;
}

export function CoursesComponent({ coursesData }: { coursesData: Course[] }) {
  const activeCourses = coursesData?.filter(({ isActive }) => isActive);
  if (!activeCourses || activeCourses.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Cursos de capacitação e aperfeiçoamento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeCourses.map((course) =>
            course.cardsHome?.map((card) => {
              const {
                title = "",
                description = "",
                image,
                ctaText = "Saiba mais",
                ctaUrl = "#",
                id,
              } = card;

              const pathImage = `${process.env.COCKPIT_URL}/storage/uploads${image}`;

              return (
                <div
                  key={id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={pathImage}
                    alt={title}
                    width={400}
                    height={200}
                    className="w-full"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 min-h-14">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <Button
                      variant="default"
                      className="bg-green-600 hover:bg-green-700 text-white w-full"
                    >
                      <Link href={ctaUrl}>{ctaText}</Link>
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

const wrapperCourses = (Component: any) => {
  return async function WrapperCourses() {
    const dispatch = makeStore.dispatch;
    await dispatch(operationsCourses.fetchCoursesData());
    const store = makeStore.getState();

    const coursesData = selectorsCourses.selectCoursesData(store);
    
    return <Component coursesData={coursesData} />;
  };
};

export const CoursesSection = wrapperCourses(CoursesComponent);
