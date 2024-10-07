"use server";
import { makeStore } from "@/store/createStore";
import { operationsHeader, selectorsHeader } from "@/ducks/header"; 
import { operationsHero } from "@/ducks/hero";
import { operationsCourses } from "@/ducks/courses";

const wrapperDataPage = (Component: any) => {
  return async function WrapperDataPage() {
    const store = makeStore.getState();
    const dispatch = makeStore.dispatch;

    await Promise.all([
      dispatch(operationsHeader.fetchHeaderData()),
      dispatch(operationsHero.fetchHeroData()),
      dispatch(operationsCourses.fetchCoursesData()),
    ]);

    const exemploData = { };

    return <Component exemploData={exemploData} />;
  };
}

export { wrapperDataPage };