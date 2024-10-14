

import { isActiveInDateRange } from "@/helpers/isActiveInDateRange";

const create = (hero: any) => hero.map((slide: any) => {
  return {
    pathImage: slide?.image?.path,
    userDestination: slide?.userDestination,
    isSlideActive: isActiveInDateRange(slide?.startDate, slide?.endDate),
    id: slide?._id
  };
})

export { create }