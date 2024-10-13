"use server";
import { makeStore } from "@/store/createStore";
import { operationsHeader } from "@/ducks/header"; 
import { operationsHero } from "@/ducks/hero";
import { operationsCourses } from "@/ducks/courses";
import { operationsTeachers } from "@/ducks/teachers";
import { operationsStructure } from "@/ducks/structure";
import { operationsFooter } from "@/ducks/footer";

const wrapperDataPage = (Component: any) => {
  return async function WrapperDataPage() {
    const dispatch = makeStore.dispatch;

    await Promise.all([
      dispatch(operationsHeader.fetchHeaderIfNeeded()),
      dispatch(operationsHero.fetchHeroIfNeeded()),
      dispatch(operationsCourses.fetchCoursesIfNeeded()),
      dispatch(operationsTeachers.fetchTeachersData()),
      dispatch(operationsStructure.fetchStructureData()),
      dispatch(operationsFooter.fetchFooterIfNeeded()),
    ]);

    return <Component />;
  };
}

export { wrapperDataPage };