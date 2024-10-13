
import { makeStore } from "@/store/createStore";
import { operationsHeader } from "@/ducks/header"; 
import { operationsHero } from "@/ducks/hero";
import { operationsCourses } from "@/ducks/courses";
import { operationsTeachers } from "@/ducks/teachers";
import { operationsStructure } from "@/ducks/structure";
import { operationsFooter } from "@/ducks/footer";

const wrapperDataPage = (Component: any) => {
  return async function WrapperDataPage() {
    const dispatch = makeStore?.dispatch || (() => {});

    const results = await Promise.allSettled([
      dispatch(operationsHeader.fetchHeaderData()),
      dispatch(operationsHero.fetchHeroData()),
      dispatch(operationsCourses.fetchCoursesData()),
      dispatch(operationsTeachers.fetchTeachersData()),
      dispatch(operationsStructure.fetchStructureData()),
      dispatch(operationsFooter.fetchFooterData()),
    ]);

    results.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(`Erro na operação ${index + 1}:`, result.reason);
      }
    });

    return <Component />;
  };
}

export { wrapperDataPage };