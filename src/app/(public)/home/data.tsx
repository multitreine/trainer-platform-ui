"use server";
import { makeStore } from "@/store/createStore";
import { operationsHeader } from "@/ducks/header"; 
import { operationsHero } from "@/ducks/hero";
import { operationsCourses } from "@/ducks/courses";
import { operationsTeachers } from "@/ducks/teachers";
import { operationsStructure } from "@/ducks/structure";

const wrapperDataPage = (Component: any) => {
  return async function WrapperDataPage() {
    const store = makeStore.getState();
    const dispatch = makeStore.dispatch;

    await Promise.all([
      dispatch(operationsHeader.fetchHeaderData()),
      dispatch(operationsHero.fetchHeroData()),
      dispatch(operationsCourses.fetchCoursesData()),
      dispatch(operationsTeachers.fetchTeachersData()),
      dispatch(operationsStructure.fetchStructureData())
    ]);

    const exemploData = { };

    return <Component exemploData={exemploData} />;
  };
}

export { wrapperDataPage };