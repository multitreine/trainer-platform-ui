
export const selectCoursesData = (state: any) => state.courses?.data || [];
export const selectCoursesLoading = (state: any) => state.courses?.loading ?? false;
export const selectCoursesError = (state: any) => state.courses?.error ?? null;

export const selectorsCoursesDetails = (state: any, slug: any) => {
  const courses = selectCoursesData(state);

  const course = courses.find((item: { details?: any[] }) => {
    return item.details?.some((detail: { slug: any }) => {
      return detail.slug === slug;
    });
  });

  if (course && course.details) {
    const courseDetails = course.details.find((detail: { slug: any }) => detail.slug === slug);
    return courseDetails ? courseDetails : [];
  }
  return [];
};
