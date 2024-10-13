
import { makeStore } from "@/store/createStore";
import { operationsHeader } from "@/ducks/header";
import { operationsHero } from "@/ducks/hero";
import { operationsCourses, selectorsCourses } from "@/ducks/courses";
import { operationsFooter } from "@/ducks/footer";
import _ from "lodash";

const wrapperDataPage = (Component: any) => {
  return async function WrapperDataPage({
    params,
  }: {
    params: { slug: string };
  }) {

    console.log(params);
    const store = makeStore.getState();
    const dispatch = makeStore.dispatch;

    const detailsData: { details?: any } = {};

    const coursesData = selectorsCourses.selectorsCoursesDetails(store, params.slug);

    if(!_.isEmpty(coursesData)) {
      detailsData.details = coursesData;
    }

    if (_.isEmpty(detailsData)) {
      return { notFound: true };
    }

    await Promise.all([
      dispatch(operationsHeader.fetchHeaderData()),
      dispatch(operationsHero.fetchHeroData()),
      dispatch(operationsCourses.fetchCoursesData()),
      dispatch(operationsFooter.fetchFooterData()),
    ]);

    const exemploData = {};

    return <Component details={detailsData.details} />;
  };
};

export { wrapperDataPage };
