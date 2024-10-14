"use server";
import { useCoursesStore } from "@/store/courses";
import { useGeneralDetailsStore } from "@/store/generalDetails";
import _ from "lodash";
import { redirect } from "next/navigation";

export const selectorsCoursesDetails = async (slug: any) => {
  const courses = await useCoursesStore.getState().fetchCourses();
  const coursesData = useCoursesStore.getState().courses;

  const course = coursesData.find((item: { details?: any[] }) => {
    return item.details?.some((detail: { slug: any }) => {
      return detail.slug === slug;
    });
  });

  if (course && course.details) {
    const courseDetails = course.details.find(
      (detail: { slug: any }) => detail.slug === slug
    );
    return courseDetails ? courseDetails : [];
  }
  return [];
};


const wrapperDataPage = (Component: any) => {
  return async function WrapperDataPage({
    params,
  }: {
    params: { slug: string };
  }) {
    try{
      let detailsData = {};
      const slug = params?.slug;

      const coursesData = await selectorsCoursesDetails(slug);

      if (!_.isEmpty(coursesData)) {
        detailsData = coursesData;
      }

      if (_.isEmpty(detailsData)) {
        const generalDetails = await useGeneralDetailsStore
          .getState()
          .fetchCourses();
        const generalDetailsData = useGeneralDetailsStore.getState().details;

        detailsData = generalDetailsData[0]?.details[0];
      }

      if (_.isEmpty(detailsData)){
        return redirect("/");
      }

    return <Component details={detailsData} />;

    }catch(e){}
    return redirect("/");
  };
};

export { wrapperDataPage };
